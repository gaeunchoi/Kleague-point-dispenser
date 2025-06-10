import { Schedule } from "./schedule";

export type GroupsByRDT = Schedule & {
  isFirstRound: boolean;
  roundRowSpan: number;

  isFirstDate: boolean;
  dateRowSpan: number;

  isFirstTime: boolean;
  timeRowSpan: number;
};
