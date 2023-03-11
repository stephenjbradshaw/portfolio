import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {GlobalStyle} from "../styles/global";
import {light} from "../styles/themes";

const Layout = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;