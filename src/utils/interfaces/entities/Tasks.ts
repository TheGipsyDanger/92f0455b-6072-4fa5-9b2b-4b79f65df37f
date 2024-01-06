export interface ITask {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'done';
  file: string;
}
