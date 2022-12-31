import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { tabletPortraitAndSmaller } from "../style-rules/responsive.css";

export default {
  parentHero: style({
    position: "relative",
    width: "100%",
    height: "100vh",
  }),
};
