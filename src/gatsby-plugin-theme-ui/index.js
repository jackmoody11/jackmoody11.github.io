import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    accent: "#4B9CD3",
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        accent: "#4B9CD3",
      },
    },
  },
};
