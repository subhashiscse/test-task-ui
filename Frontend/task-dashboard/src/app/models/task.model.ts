export interface Task {
  _id?: string;
  name: string;
  createdAt: Date;
  endedAt?: Date;
  executionTime?: number;
  status: string;
}
