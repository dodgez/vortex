import { create } from 'zustand';

export interface CountState {
  count: number;
  decrement: () => void;
  increment: () => void;
  reset: () => void;
}
export const useCountStore = create<CountState>((set) => ({
  count: 0,
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  reset: () => {
    set(() => ({ count: 0 }));
  },
}));
