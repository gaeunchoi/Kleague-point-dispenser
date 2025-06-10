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
        try {
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
