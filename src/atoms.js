import { atom } from "recoil";
import dayjs from "dayjs";

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

export const lastSupportedYearState = atom({
  key: "lastSupportedYearState",
  default: "",
});
export const enteredYearState = atom({
  key: "enteredYearState",
  default: "",
});
export const enteredMileageState = atom({
  key: "enteredMileageState",
  default: "",
});
export const serviceAndPriceForSelectedModelState = atom({
  key: "serviceAndPriceForSelectedModelState",
  default: [],
});
export const selectedServicesState = atom({
  key: "selectedServicesState",
  default: [],
});
export const dateSelectedState = atom({
  key: "dateSelectedState",
  default: false,
});
export const dateTimePickerState = atom({
  key: "dateTimePickerState",
  default: dayjs().add(1, "day"),
});
