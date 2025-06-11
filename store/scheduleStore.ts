import { LeagueId } from "@/data/teamLogo";
import { Schedule } from "@/type/schedule";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ScheduleStore = {
  k1Data: Schedule[];
  k2Data: Schedule[];
  curLeagueSchedule: Schedule[];
  isLoading: boolean;
  fetchData: () => void;

  leagueId: LeagueId;
  toggleLeagueId: () => void;
};

export const useScheduleStore = create<ScheduleStore>()(
  persist(
    (set, get) => ({
      k1Data: [],
      k2Data: [],
      curLeagueSchedule: [],
      isLoading: false,
      fetchData: async () => {
        set({ isLoading: true });

        const state = get();
        if (state.k1Data.length > 0 || state.k2Data.length > 0) {
          const curLeague =
            state.leagueId === "k1" ? state.k1Data : state.k2Data;
          set({ curLeagueSchedule: curLeague, isLoading: false });
          return;
        }

        try {
          const res = await fetch("/api/fetchLeagueSchedule", {
            method: "POST",
          });
          const { k1, k2 } = await res.json();
          const curLeague = get().leagueId === "k1" ? k1 : k2;

          set({
            k1Data: k1,
            k2Data: k2,
            curLeagueSchedule: curLeague,
          });
        } catch (err) {
          console.error("🚨 fetchData 에러: ", err);
        } finally {
          set({ isLoading: false });
        }
      },
      leagueId: "k1",
      toggleLeagueId: () => {
        const state = get();
        const newId: LeagueId = state.leagueId === "k1" ? "k2" : "k1";
        const newData = newId === "k1" ? state.k1Data : state.k2Data;
        set({ leagueId: newId, curLeagueSchedule: newData });
      },
    }),
    {
      name: "schedule-store",
    }
  )
);
