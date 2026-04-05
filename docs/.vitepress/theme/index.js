import DefaultTheme from "vitepress/theme";
import "./index.scss";
import "./theme.scss";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // Custom enhancements for your app go here
    }
}