import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    cardWrapper: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5e5e5",
      borderTop: "4px solid #ee52ff",
      boxShadow: "0px 2px 8px #ee52ff",
      marginBottom: 40,
      marginTop: 0,
      maxWidth: 750,
      width: "100%"
    },
    changeScale: {
      marginBottom: 10,

      "& > input": {
        width: 50
      }
    },
    changeUnits: {
      marginBottom: 20,
      "& > div": {
        verticalAlign: "middle"
      }
    },
    changeUnitsWrapper: {
      position: "relative"
    },
    changeWarning: {
      fontFamily: "MuseoSansCyrl-900, sans-serif",
      fontWeight: 900,
      marginTop: 10
    },
    closeIcon: {
      display: "inline-block",
      height: 26,
      overflow: "hidden",
      position: "relative",
      width: 22,

      "&:hover": {
        "&::before, &::after": {
          background: "#e129f5"
        }
      },

      "&::before, &::after": {
        background: "#ee52ff",
        content: "''",
        left: 0,
        height: 4,
        marginTop: -4,
        position: "absolute",
        top: "50%",
        width: "100%"
      },

      "&:after": {
        transform: "rotate(-45deg)"
      },

      "&:before": {
        transform: "rotate(45deg)"
      }
    },
    closeIconWrapper: {
      backgroundColor: "#fff",
      border: "4px solid #ee52ff",
      borderRadius: 24,
      cursor: "pointer",
      height: 22,
      marginLeft: -20,
      marginTop: -20,
      padding: 5,

      "&:hover": {
        border: "4px solid #e129f5"
      }
    },
    disabledText: {
      color: "#888888"
    },
    header: {
      background: "#ececec",
      display: "flex",
      justifyContent: "space-around",
      marginBottom: 30,
      padding: "20px 25px 10px 25px"
    },
    ingredients: {
      fontSize: "1.25rem",
      marginBottom: "2rem",

      "& > li": {
        marginBottom: "0.4rem"
      }
    },
    instruction: {
      position: "relative",

      "& > strong": {
        left: 10,
        position: "absolute",
        top: 2
      },

      "& > p": {
        padding: "0 20px 20px 40px"
      }
    },
    originLink: {
      display: "block",
      marginBottom: 10,
      color: "#ee52ff",

      "&:hover": {
        color: "#e129f5"
      },

      "&:active": {
        color: "#913e9a"
      }
    },
    progressPic: {
      height: "auto",
      maxWidth: 700,
      width: "100%"
    },
    progressPics: {
      padding: 25
    },
    recipeInfo: {
      fontFamily: "MuseoSansCyrl-700, sans-serif",
      fontWeight: 700
    },
    recipeInfoWrapper: {
      color: "rgb(51, 51, 51)",
      fontSize: "0.85rem",
      paddingRight: 20,
      textAlign: "center"
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
    recipeSection: {
      padding: "0 25px 25px"
    },
    sectionHeader: {
      textTransform: "uppercase",
      paddingRight: 20
    },
    seperator: {
      borderTop: "1px solid #999",
      marginBottom: 20
    },
    summary: {
      marginTop: "1rem",
      textAlign: "center"
    },
    thumbnail: {
      border: "8px solid #fff",
      borderRadius: "50%",
      height: 180,
      left: 15,
      position: "relative",
      width: 180
    },
    title: {
      lineHeight: "2.35rem",
      fontSize: "1.85rem",
      marginTop: 0,
      textAlign: "center"
    },
    unitChangedWarning: {
      fontSize: "0.75rem",
      verticalAlign: "middle",
      marginLeft: 8
    }
  },
  {
    name: "RecipeCard"
  }
);

export default useStyles;
