export interface AssessmentAnswers {
  habit: string;
  time: string;
  consistency: string;
  obstacles: string[];
  situation: string;
  goal: string;
  timeSlot: string;
}

export interface Plan {
  habit: string;
  goal: string;
  target: number;
  minimum: number;
  maximum: number;
  explanation: string[];
  startDate: string;
  timeSlot: string | null;
  weeklyRamp: number[];
  status?: string;
}

export interface CheckInEntry {
  date: string;
  actualMinutes: number;
  feedback: string;
  target: number;
  minimum: number;
  maximum: number;
  note: string;
}

export interface CheckIns {
  [date: string]: CheckInEntry;
}

export interface Adjustment {
  date: string;
  previousTarget: number;
  newTarget: number;
  previousMinimum: number;
  newMinimum: number;
  previousMaximum: number;
  newMaximum: number;
  hitRate: number;
  direction: 'increased' | 'decreased';
  amount: number;
}

export interface TimerState {
  seconds: number;
  interval: ReturnType<typeof setInterval> | null;
  status: 'idle' | 'running' | 'paused' | 'finished';
  earlyExit: boolean;
}

export interface StopwatchState {
  seconds: number;
  interval: ReturnType<typeof setInterval> | null;
  status: 'idle' | 'running' | 'paused' | 'stopped';
}

export interface BackupData {
  assessment: AssessmentAnswers | null;
  plan: Plan | null;
  checkIns: CheckIns;
  adjustments: Adjustment[];
  resistanceSets: { [date: string]: number };
  previousPlan: Plan | null;
  previousCheckIns: CheckIns;
  exportedAt: string;
  version: number;
}
