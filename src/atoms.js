import { atom } from "recoil";

export const csvContentState = atom({
  key: "csvContentState",
  default: [],
});
// --- Brands --- //
export const uniqueBrandsState = atom({
  key: "uniqueBrandsState",
  default: [],
});
export const selectedBrandState = atom({
  key: "selectedBrandState",
  default: "",
});

// --- Models --- //
export const availableModelsState = atom({
  key: "availableModelsState",
  default: [],
});
export const selectedModelState = atom({
  key: "selectedModelState",
  default: "",
});
