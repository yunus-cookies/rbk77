import { StyleRule } from "@vanilla-extract/css";

type StyleRuleProps = Omit<StyleRule, "@media" | "@supports">;

export const phoneOnly = (rules: StyleRuleProps) => ({
  "@media": { "screen and (max-width: 599px)": rules },
});

export const tabletPortraitOnly = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 600px) and (max-width: 899px)": rules },
});

export const tabletPortraitAndSmaller = (rules: StyleRuleProps) => ({
  "@media": { "screen and (max-width: 899px)": rules },
});

export const tabletPortraitAndBigger = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 600px)": rules },
});

export const tabletLandscapeOnly = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 900px) and (max-width: 1199px)": rules },
});

export const tabletLandscapeAndSmaller = (rules: StyleRuleProps) => ({
  "@media": { "screen and (max-width: 1199px)": rules },
});

export const tabletLandscapeAndBigger = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 900px)": rules },
});

export const desktopOnly = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 1200px) and (max-width: 1799px)": rules },
});

export const desktopAndBSmaller = (rules: StyleRuleProps) => ({
  "@media": { "screen and (max-width: 1799px)": rules },
});

export const desktopAndBigger = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 1200px)": rules },
});

export const largerDesktop = (rules: StyleRuleProps) => ({
  "@media": { "screen and (min-width: 1800px)": rules },
});
