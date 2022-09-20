import { createUseStyles } from "react-jss";

import type { CSSObjectWithLabel } from "react-select";

const useStyles = createUseStyles(
  {
    accessibiiltyLabel: {
      left: 0,
      opacity: 0,
      position: "absolute",
      pointerEvents: "none",
      top: 0
    },
    bottomFade: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 28%, rgba(255,255,255,0) 100%)",
      bottom: 0,
      height: 30,
      pointerEvents: "none",
      position: "absolute",
      width: "100%"
    },
    bottomText: {
      color: "#969696",
      fontSize: "0.7rem",
      margin: "10px 50px"
    },
    filterHeader: {
      paddingLeft: 30
    },
    filterInput: {
      border: "1px solid #e5e5e5",
      borderTop: "2px solid #ee52ff",
      boxShadow: "0px 1px 4px #ee52ff",
      color: "hsl(0, 0%, 20%)",
      fontFamily: "MuseoSansCyrl-500, sans-serif",
      fontSize: 16,
      margin: "17px 50px 17px 10px",
      padding: 8,
      width: 200,

      "&:hover": {
        borderColor: "#e129f5",
        boxShadow: "0 1px 4px #e129f5"
      }
    },
    header: {
      display: "flex",
      justifyContent: "space-between"
    },
    list: {
      height: "75vh",
      padding: "25px 0",
      overflowY: "scroll"
    },
    listWrapper: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5e5e5",
      borderTop: "4px solid #ee52ff",
      boxShadow: "0px 2px 8px #ee52ff",
      margin: "2vh 7%",
      position: "relative",
      width: "86%"
    },
    pageTitle: {
      marginLeft: 50
    },
    placeholderText: {
      color: "#f00"
    },
    recipeLink: {
      cursor: "pointer",
      color: "#ee52ff",
      lineHeight: "1.75rem",

      "& > div": {
        paddingLeft: 30
      },

      "&:hover": {
        color: "#e129f5",

        "& > div": {
          backgroundColor: "#aee9fe"
        }
      },

      "&:active": {
        color: "#913e9a",

        "& > div": {
          backgroundColor: "#dae4e8"
        }
      }
    },
    topFade: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 28%, rgba(255,255,255,0) 100%)",
      height: 30,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      width: "100%"
    }
  },
  {
    name: "RecipesList"
  }
);

export const selectStyles = {
  container: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: "inline-block"
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    width: 200,
    borderRadius: 0,
    borderTop: "2px solid #ee52ff",
    boxShadow: "0 1px 4px #ee52ff",
    cursor: "text",
    "&:hover": {
      borderColor: "#e129f5",
      boxShadow: "0 1px 4px #e129f5"
    }
  })
};

export default useStyles;
