import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {DataContext} from "../DataContext";
import useGetEntries from "../hooks/useGetEntries";
import {IProjectFields} from "../schema/generated/contentful";
import {GlobalStyle} from "../styles/global";
import {light} from "../styles/themes";

const Layout = () => {
  const {
    data: featuredProjects,
    isLoading,
    isError,
  } = useGetEntries<IProjectFields>({contentType: "project", isFeatured: true});

  console.log(featuredProjects);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <DataContext.Provider value={{featuredProjects, isLoading, isError}}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </DataContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
