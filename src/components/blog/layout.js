// import Alert from "./alert";

import { ThemeProvider } from "theme-ui";
import theme from "../../theme";
import Header from "../header/header";
import Meta from "./meta";
// import Layout from "../components/layout";

export default function Layout({ preview, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Header />
      <div className="min-h-screen p-[7.5rem] ">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
