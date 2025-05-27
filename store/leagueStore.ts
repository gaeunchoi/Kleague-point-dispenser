import { Rank } from "@/type/rank";
import { create } from "zustand";

type LeagueStore = {
  data: Rank[];
  isLoading: boolean;
  fetchData: () => void;
};

export const useLeagueStore = create<LeagueStore>((set) => ({
  data: [],
  isLoading: true,
  fetchData: async () => {
    set({ isLoading: true });
    const res = await fetch("/api/fetchLeagueData");
    const data = await res.json();
    set({ data, isLoading: false });
  },
}));
