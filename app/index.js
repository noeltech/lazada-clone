import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./styles/Theme";
import { base } from "./styles/Base";
import { Normalize } from "styled-normalize";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pages from "./components/Pages/index";
import ScrollToTop from "./components/Utilities/ScrollToTop";

const GlobalStyle = createGlobalStyle`
${base}
`;

class App extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Applying a css reset*/}
        <Normalize />
        {/* Applying a css base style*/}
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            {/* Providing a fix for reseting the new navigated page to its top scroll */}
            <ScrollToTop>
            {/* Pages Component is collection of routes of most of the pages of the site */}
              <Pages />
            </ScrollToTop>
            <Footer />
          </Router>
        </ThemeProvider>
      </Fragment>
    );
  }
}

ReactDOM.render(
  // React Element
  <App />,
  document.getElementById("app")
  //
);
