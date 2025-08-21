export const TASKS = {
  planned: 'PLANNED',
  ongoing: 'ONGOING',
  done: 'DONE',
} as const


export type TaskType = typeof TASKS[keyof typeof TASKS];