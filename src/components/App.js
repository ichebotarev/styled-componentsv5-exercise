import React from "react";
import Button from "./common/Button";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`

body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: ibm-plex-sans-jp, sans-serif;

  font-style: normal;
}
`;

//theme variables
const theme = {
	primaryColor:  '#29f804',
	secondaryColor: '#fdd54f'
}
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			{/* <Button>Primary</Button>
			<Button secondary>Secondary</Button>
			<Button disabled>Disabled</Button>
			<Button large>Large</Button> */}
			<BrowserRouter>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
