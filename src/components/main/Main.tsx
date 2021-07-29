import { Route, Switch } from "react-router";

import Header from "../header";
import Sidebar from "../sidebar";

import { FullContainer, FlexCenter } from "../../styles/containers";


const Main = () => {
  return (
    <FullContainer>
      <FlexCenter>
        <Header />
        <Switch>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Switch>
        <Sidebar />
      </FlexCenter>
    </FullContainer>
  );
}

export default Main;
