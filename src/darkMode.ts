import { storage as localStorage } from "./localStorage";

export const getInitialDarkMode = () => {
    return localStorage().getDarkMode();
};