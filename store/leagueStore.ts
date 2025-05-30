import { LeagueId } from "@/data/teamLogo";
import { Rank } from "@/type/rank";
import { create } from "zustand";

type LeagueStore = {
  k1Data: Rank[];
  k2Data: Rank[];
  curLeagueData: Rank[];
  isLoading: boolean;
  fetchData: () => void;

  leagueId: LeagueId;
  toggleLeagueId: () => void;
};

export const useLeagueStore = create<LeagueStore>((set, get) => ({
  k1Data: [],
  k2Data: [],
  curLeagueData: [],
  isLoading: true,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/fetchLeagueData");
      const { k1, k2 } = await res.json();
      set({
        k1Data: k1,
        k2Data: k2,
        isLoading: false,
        leagueId: "K1",
        curLeagueData: k1,
      });
    } catch (err) {
      console.error("🚨 fetchData 에러: ", err);
      set({ isLoading: false });
    }
  },
  leagueId: "K1",
  toggleLeagueId: () => {
    const state = get();
    const newId: LeagueId = state.leagueId === "K1" ? "K2" : "K1";
    const newData = newId === "K1" ? state.k1Data : state.k2Data;
    set({ leagueId: newId, curLeagueData: newData });
  },
}));
