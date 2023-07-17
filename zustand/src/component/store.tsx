import { create } from "zustand";

interface BearStoreState {
  test: number;
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearStoreState>((set) => ({
  test: 1,
  addtest: () => set((state) => ({ test: state.test + 1 })),
  removetest: () => set((state) => ({ test: 0 })),
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })), //tăng bear lên 1
  removeAllBears: () => set({ bears: 0 }), //reset bear
}));

export default useBearStore;
