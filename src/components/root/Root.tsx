import { Route, Switch } from "react-router";
import Content from "../content";

import Header from "../header";
import Sidebar from "../sidebar";

import { StyledContainer, StyledWrapper } from "./styled";


const Root = () => {
  return (
    <StyledContainer>
      <StyledWrapper>  
        <Header />
        <Content />
        <Sidebar />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Root;
