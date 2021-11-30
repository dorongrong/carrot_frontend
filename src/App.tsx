import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Text from "./Text";
import Adult from "./Adult";
import Photo from "./Photo";
import { ChangeEvent } from "react";
import { KeyboardEvent } from "react";
import Counter from "./Counter";
import Adder from "./Adder";
import Welcome from "./Welcome";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import { useState } from "react";
import Test from "./pages/Test";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";

import { styled } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";

import { Container, Grid } from "@mui/material";

const App = (): JSX.Element => {
  const [lastestName, setLastestName] = useState("");
  const updateLastestName = (name: string) => {
    setLastestName(name);
  };

  const count = 1;
  const welcomeText = "Title!";
  const welcomeText02 = "subtitle!";
  const values = "hahahahahahah!!!";
  const realtextType = "strong";
  const myAge = 25;
  const imgsrc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2QVOaV5TRtyjv1L1uprcgkrKeebh453KcG8OX0D7zqvr5puREbt0_5DciT61l2XxjuU&usqp=CAU";
  const articlesrc = "잘가라 이순형";

  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />
      <Test />
      <h1>asfasfasf</h1>

      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs style={{ backgroundColor: "#22ff2f" }}>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined">홈</Button>
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#ffff2f" }}>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined">동네활동</Button>
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#f22f2f" }}>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined">내 근처</Button>
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#2f2f2f" }}>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined">채팅</Button>
              </Box>
            </Grid>
            <Grid item xs style={{ backgroundColor: "#2ff222" }}>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined">나의 당근</Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/*<input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCount={0} />
      <Adder />
      <Welcome />
      <ConditionalText />
      <HiddenName />
      <Button name="hello" callback={updateLastestName} />
      <Button name="world" callback={updateLastestName} />
      <Button name="nextop" callback={updateLastestName} />
  <article>{lastestName} is clicked!</article>*/}

      {/*s
    <div className="App">
      <Title title={welcomeText} />
      <Text myText={values} myType={realtextType} />
      {count > 5 ? <Button name="go" /> : <Button name="back" />}
      <Adult age={myAge} />
      <Photo address={imgsrc} description={articlesrc} />
    </div>
    */}
    </main>
  );
};

export default App;
