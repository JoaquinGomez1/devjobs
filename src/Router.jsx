import React, { useContext } from "react";
import {
  BrowserRouter as BRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./components/pages/Landing";
import JobDetail from "./components/pages/JobDetail";
import Navbar from "./components/Ui/Navbar";
import { SelectedJobProvider } from "./components/context/SelectedJob";
import { StyleThemeProvider } from "./components/context/ThemeContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/StyledComponents";
import { light, dark } from "./style/Themes";

export default function Router() {
  const { isLightTheme } = useContext(StyleThemeProvider);
  return (
    <>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <BRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Landing} />
            <RedirectOnRefresh path='/jobs/:id' component={JobDetail} />
            <Route path='*' component={() => <h1> Not found </h1>} />
          </Switch>
        </BRouter>
      </ThemeProvider>
    </>
  );
}

const RedirectOnRefresh = ({ rest, component: Component }) => {
  const { selectedJob } = useContext(SelectedJobProvider);
  return (
    <Route
      {...rest}
      render={(props) =>
        selectedJob ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};
