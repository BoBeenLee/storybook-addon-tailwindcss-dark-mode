import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `body`;
    if (isInDocs) {
      return;
    }

    updateRootDarkClass(selectorId, {
      darkMode,
    });
  }, [darkMode]);

  return StoryFn();
};

function updateRootDarkClass(selector: string, state: { darkMode: boolean }) {
  const rootElement = document.querySelector(selector);

  if (state.darkMode) {
    rootElement.classList.add("dark");
    return;
  }
  rootElement.classList.remove("dark");
}
