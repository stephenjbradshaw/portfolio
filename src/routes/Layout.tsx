import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import DataService from "../data/DataService";
import Footer from "../components/headerFooter/Footer";
import Header from "../components/headerFooter/Header";
import {GlobalStyle} from "../styles/global";
import {light} from "../styles/themes";

const Layout = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <DataService>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </DataService>
    </ThemeProvider>
  );
};

export default Layout;
