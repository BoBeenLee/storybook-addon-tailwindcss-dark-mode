import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ darkMode }, updateGlobals] = useGlobals();

  const toggleDarkMode = useCallback(
    () =>
      updateGlobals({
        darkMode: !Boolean(darkMode),
      }),
    [darkMode]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={darkMode}
      title="Enable dark mode"
      onClick={toggleDarkMode}
    >
      {darkMode ? <Icons icon="heart" /> : <Icons icon="hearthollow" />}
    </IconButton>
  );
};
