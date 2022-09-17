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
    recipeCardWrapper: {
      backgroundColor: "rgba(0,0,0,0.3)",
      display: "flex",
      justifyContent: "center",
      paddingTop: 50
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
