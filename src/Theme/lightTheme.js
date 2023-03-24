/**
 * An object containing light theme colors for a website.
 *
 * @typedef {Object} lightTheme
 * @property {string} id - The ID of the theme.
 * @property {string} canvas - The background color of the website.
 * @property {Object} color - The colors of the text on the website.
 * @property {string} color.primary - The primary color of the text on the website.
 * @property {string} color.hover - The color of the text on hover.
 * @property {string} color.muted - The muted color of the text on the website.
 * @property {Object} background - The colors of the backgrounds in the website.
 * @property {string} background.primary - The primary color of the background on the website.
 * @property {string} background.hover - The color of the background on hover.
 * @property {string} background.secondary - The secondary color of the background on the website.
 * @property {string} background.hoverBtnColor - The color of the button on hover.
 * @property {string} background.viewBtnColor - The color of the view button.
 * @property {string} background.iconHoverColor - The color of the icon on hover.
 * @property {Object} lineColor - The colors of the lines on the website.
 * @property {string} lineColor.primary - The primary color of the lines on the website.
 */
const lightTheme = {
  id: "light",
  canvas: "#7c3aed",
  color: {
    primary: "#475569",
    hover: "#e31d48",
    muted: "#7c7c7c",
  },
  background: {
    primary: "#f1f5f9",
    hover: "#6d28c1",
    secondary: "#FC0404",
    hoverBtnColor: "#B40404",
    viewBtnColor: "#d3d3d3",
    iconHoverColor: "##9370db",
  },
  lineColor: {
    primary: "#fff",
  },
};

export default lightTheme;
