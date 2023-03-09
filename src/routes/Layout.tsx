import {Outlet} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {GlobalStyle} from "../styles/global";
import {light} from "../styles/themes";

const Container = styled.div`
  margin: 0 4vw;
`;

const Layout = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
