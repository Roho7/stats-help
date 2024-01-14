import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const TestDataAtom = atom({
  key: "test-data",
  default: {
    nature: "",
    param: "",
    iv_number: 0,
    iv_levels: 0,
    subjects_rel: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const DarkModeAtom = atom({
  key: "dark-mode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
