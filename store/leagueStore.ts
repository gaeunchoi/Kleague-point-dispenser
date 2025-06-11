import { LeagueId } from "@/data/teamLogo";
import { Rank } from "@/type/rank";
import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

type LeagueStore = {
  k1Data: Rank[];
  k2Data: Rank[];
  curLeagueData: Rank[];
  isLoading: boolean;
  fetchData: () => void;

  leagueId: LeagueId;
  setLeagueId: (id: LeagueId) => void;
  toggleLeagueId: () => void;
};

export const useLeagueStore = create<LeagueStore>()(
  persist(
    (set, get) => ({
      k1Data: [],
      k2Data: [],
      curLeagueData: [],
      isLoading: false,
      fetchData: async () => {
        set({ isLoading: true });

        // 이미 api 호출해서 데이터 갖고 있으면 fetch 생략해버려
        try {
          const state = get();
          if (
            (state.leagueId === "k1" && state.k1Data.length > 0) ||
            (state.leagueId === "k2" && state.k2Data.length > 0)
          ) {
            set({
              curLeagueData:
                state.leagueId === "k1" ? state.k1Data : state.k2Data,
              isLoading: false,
            });

            return;
          }

          const res = await fetch("/api/fetchLeagueData");
          const { k1, k2 } = await res.json();
          const curLeague = get().leagueId === "k1" ? k1 : k2;

          set({
            k1Data: k1,
            k2Data: k2,
            curLeagueData: curLeague,
            isLoading: false,
          });
        } catch (err) {
          console.error("🚨 fetchData 에러: ", err);
          set({ isLoading: false });
        }
      },
      leagueId: "k1",
      setLeagueId: (id: LeagueId) => {
        const state = get();
        const newData = id === "k1" ? state.k1Data : state.k2Data;
        set({ leagueId: id, curLeagueData: newData });
      },
      toggleLeagueId: () => {
        const state = get();
        const newId: LeagueId = state.leagueId === "k1" ? "k2" : "k1";
        const newData = newId === "k1" ? state.k1Data : state.k2Data;
        set({ leagueId: newId, curLeagueData: newData });
      },
    }),
    {
      name: "league-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
