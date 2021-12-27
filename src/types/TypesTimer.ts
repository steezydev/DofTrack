export type TimerFiled = "HOURS" | "MINUTES";
export type TimerOperation = "DEC" | "INC";
export type TimerInterval = 1 | 10 | 15 | 30;

export interface Timer {
    HOURS: number
    MINUTES: number
}