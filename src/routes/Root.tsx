import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {main} from "../themes/main";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <ThemeProvider theme={main}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Root;
