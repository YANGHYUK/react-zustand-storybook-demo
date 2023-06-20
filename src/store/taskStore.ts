import { create } from "zustand";
export type Ttask = {
  id: number;
  title: string;
  state: string;
};
export interface Itask {
  task: Ttask;
  onArchiveTask: () => void;
  onPinTask: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const taskStore = create<Itask>((set) => ({
  task: { id: 1, title: "", state: "TASK_INBOX" },
  onArchiveTask: () =>
    set((state) => {
      if (state.task.state === "TASK_ARCHIVED") {
        state.task.state = "TASK_INBOX";
      } else {
        state.task.state = "TASK_ARCHIVED";
      }
      return { ...state };
    }),
  onPinTask: () =>
    set((state) => {
      if (state.task.state === "TASK_PINNED") {
        state.task.state = "TASK_INBOX";
      } else {
        state.task.state = "TASK_PINNED";
      }
      return { ...state };
    }),
  onChange: (e) =>
    set((state) => {
      console.log({ state });
      state.task.title = e.target.value;
      return { ...state };
    }),
}));

export default taskStore;
