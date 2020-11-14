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

export default function Router() {
  return (
    <>
      <BRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Landing} />
          <RedirectOnRefresh path='/jobs/:id' component={JobDetail} />
          <Route path='*' component={() => <h1> Not found </h1>} />
        </Switch>
      </BRouter>
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
