import { isJSON } from "./utils/common";
import { once } from "./utils/function";
import { isEmpty } from "./utils/lang";

type StorageType = "storybook-addon-tailwindcss-dark-mode";

function storageFactory(
  setItem: (key: string, value: string) => void,
  getItem: (key: string) => string,
  clear: () => void
) {
  const setStorageItem = (key: StorageType, value: string) => {
    return setItem(key, value);
  };

  const getStringWithDefault = (
    key: StorageType,
    defaultItem: string
  ): string => {
    try {
      const itemString = getItem(key);
      return isEmpty(itemString) ? defaultItem : itemString;
    } catch (error) {
      return defaultItem;
    }
  };

  const getBooleanWithDefault = (
    key: StorageType,
    defaultItem: boolean
  ): boolean => {
    try {
      const itemString = getItem(key);
      return isEmpty(itemString) ? defaultItem : itemString === "true";
    } catch (error) {
      return defaultItem;
    }
  };

  const getNumberWithDefault = (
    key: StorageType,
    defaultItem: number
  ): number => {
    try {
      const itemString = getItem(key);
      const num = Number(itemString);
      return !isNaN(num) ? num : defaultItem;
    } catch (error) {
      return defaultItem;
    }
  };

  const getJSONWithDefault = <T>(key: StorageType, defaultItem: T): T => {
    try {
      const itemJSON = getItem(key);
      if (!isJSON(itemJSON)) {
        return defaultItem;
      }
      return JSON.parse(itemJSON) as T;
    } catch (error) {
      // NOTHING
    }
    return defaultItem;
  };

  const setStorages = {
    setDarkMode: (darkMode: boolean) => {
      setStorageItem("storybook-addon-tailwindcss-dark-mode", String(darkMode));
    },
  };

  const getStorages = {
    getDarkMode: () => {
      return getBooleanWithDefault(
        "storybook-addon-tailwindcss-dark-mode",
        false
      );
    },
  };

  return {
    ...setStorages,
    ...getStorages,
    clear,
  };
}

export const storage = once(() => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getItem = (key: string) => {
    return localStorage.getItem(key) ?? "";
  };

  const clear = () => {
    return localStorage.clear();
  };
  return storageFactory(setItem, getItem, clear);
});
