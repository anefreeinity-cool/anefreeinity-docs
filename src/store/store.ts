import { create } from "zustand";

interface IStore {
  isMobileView: boolean;
}

const useStore = create<IStore>((set) => {
  return {
    isMobileView: false,
  };
});

export const useMobileView = () => useStore((state) => state.isMobileView);

export const setMobileView = (state: boolean) =>
  useStore.setState({ isMobileView: state });
