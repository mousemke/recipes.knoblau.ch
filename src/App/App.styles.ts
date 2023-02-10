import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        backgroundColor: "#caf1ff",
        fontFamily: "MuseoSansCyrl-500, sans-serif",
        margin: "0"
      },
      "@font-face": [
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore // this works - no idea why ts doesnt like it
          fontFamily: "MuseoSansCyrl-500",
          src: "url('fonts/MuseoSansCyrl-500.ttf')"
        },
        {
          fontFamily: "MuseoSansCyrl-700",
          src: "url('fonts/MuseoSansCyrl-700.ttf')"
        },
        {
          fontFamily: "MuseoSansCyrl-900",
          src: "url('fonts/MuseoSansCyrl-900.ttf')"
        }
      ]
    },
    hiddenList: {
      position: "absolute",
      left: -9999
    },
    recipeCardWrapper: {
      backgroundColor: "rgba(0,0,0,0.3)",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
      paddingTop: 50
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
