import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { tabletPortraitAndSmaller } from "../style-rules/responsive.css";

export default {
  nav: recipe({
    base: [
      {
        height: 80,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: "1.2rem",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 99,
        transition: "all 300ms ease",
        backgroundColor: "transparent",
      },
    ],
    variants: {
      scrolling: {
        true: { backgroundColor: "#a1264a" },
      },
      hasClicked: {
        true: { backgroundColor: "#242424" },
      },
    },
  }),
  navContainer: style({
    display: "flex",
    justifyContent: "space-between",
    height: "80px",
    zIndex: 1,
    width: "100%",
  }),
  logoContainer: style({
    display: "grid",
    placeItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #000",
  }),
  navMenu: recipe({
    base: [
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        listStyle: "none",
        textAlign: "center",
      },
      tabletPortraitAndSmaller({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 80,
        opacity: 1,
        transition: "all 500ms ease",
        left: "-100%",
        backgroundColor: "transparent",
      }),
    ],
    variants: {
      hasClicked: {
        true: tabletPortraitAndSmaller({
          left: 0,
          backgroundColor: "#242424",
        }),
      },
      // scrolling: {
      //          true: tabletPortraitAndSmaller({
      //     left: 0,
      //     backgroundColor: "#242424",
      //   }),
      // },
    },
  }),
  navItem: recipe({
    base: [
      {
        borderBottom: "2px solid transparent",
        selectors: {
          "&:hover": {
            borderBottom: "4px solid #79bff9",
            paddingBottom: "10px",
          },
        },
      },
      tabletPortraitAndSmaller({
        width: "100%",
        border: 0,
        padding: 0,
        selectors: {
          "&:hover": {
            border: 0,
            padding: 0,
          },
        },
      }),
    ],
  }),
  navLink: recipe({
    base: [
      {
        color: "#fff",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        padding: "0.5rem 2rem",
        height: "100%",
      },
      tabletPortraitAndSmaller({
        textAlign: "center",
        padding: "2rem",
        margin: "0 auto",
        display: "table",
        transition: "all 300ms ease-out",
        selectors: {
          "&:hover": {
            color: "#f00946",
            transform: "scale(1.2)",
            transition: "all 300ms ease",
          },
        },
      }),
    ],
  }),
  headerButtonContainer: recipe({
    base: [
      {
        display: "grid",
        placeItems: "center",
        width: 250,
      },
      tabletPortraitAndSmaller({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: 50,
      }),
    ],
  }),
  headerButton: style({
    cursor: "pointer",
    border: "1px solid white",
    borderRadius: 3,
    width: 210,
    height: 45,
    fontSize: 25,
    color: "#fff",
    backgroundColor: "transparent",
    transition: "all 200ms ease",
    selectors: {
      "&:hover": {
        border: 0,
        color: "#000",
        backgroundColor: "#79bff9",
        transform: "scale(1.05)",
        transition: "all 200ms ease",
      },
    },
  }),
  mobileIcon: recipe({
    base: [
      {
        display: "none",
      },
      tabletPortraitAndSmaller({
        display: "block",
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translate(-100%, 60%)",
        fontSize: "1.8rem",
        cursor: "pointer",
      }),
    ],
  }),
};
