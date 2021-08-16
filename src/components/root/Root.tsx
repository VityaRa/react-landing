import { useState } from "react";
import { Route, Switch } from "react-router";
import Content from "../content";

import Header from "../header";
import Sidebar from "../sidebar";

import { StyledContainer, StyledWrapper } from "./styled";

const Root = () => {
  const [open, setOpen] = useState(false)

  return (
    <StyledContainer>
      <StyledWrapper>
        <Header open={open} setOpen={setOpen}/>
        <Content />
        <Sidebar open={open} setOpen={setOpen} />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Root;
