import { create } from "zustand";

interface IUtilityStore {
  isMobileView: boolean;
  isDrawerOpen: boolean;
  setMobileView: (state: boolean) => void;
  setDrawerOpen: (state: boolean | ((prev: boolean) => boolean)) => void;
}

const useStore = create<IUtilityStore>((set) => ({
  isMobileView: window.innerWidth < 769,
  isDrawerOpen: false,
  setMobileView: (state) => set({ isMobileView: state }),
  setDrawerOpen: (state) =>
    set((prev) => ({
      isDrawerOpen:
        typeof state === "function" ? state(prev.isDrawerOpen) : state,
    })),
}));

export const useMobileView = () => useStore((state) => state.isMobileView);
export const useDrawerOpen = () => useStore((state) => state.isDrawerOpen);
export const setMobileView = useStore.getState().setMobileView;
export const setDrawerOpen = useStore.getState().setDrawerOpen;
