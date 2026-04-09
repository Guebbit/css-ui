import DefaultTheme from "vitepress/theme";
import "./theme.scss";
import "./index.scss";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // Custom enhancements for your app go here
    }
}