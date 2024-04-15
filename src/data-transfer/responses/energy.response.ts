export interface IEnergyResponse {
  userId: string;
  energy: number;
  maxPoints: number;
  recoveryMinutes: number;
  fullRecoveryIn: Date | null;
}
