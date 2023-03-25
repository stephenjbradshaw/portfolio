import {Outlet, ScrollRestoration} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";
import DataService from "../data/DataService";
import Footer from "../components/headerFooter/Footer";
import Header from "../components/headerFooter/Header";
import {GlobalStyle} from "../styles/global";
import {light} from "../styles/themes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex-grow: 1;
  }
`;

const Layout = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <ScrollRestoration />
      <DataService>
        <Container>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </Container>
      </DataService>
    </ThemeProvider>
  );
};

export default Layout;
