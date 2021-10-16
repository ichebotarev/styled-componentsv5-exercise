import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	position: fixed;
	top: 0;
`;
const Menu = styled.nav`
	display: flex;
	position: relative;
	width: initial;
	border-bottom: none;
	margin: auto 0 auto auto;
	background: none;
	left: initial;
	top: initial;
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Menu>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
			</Menu>
		</HeaderWrapper>
	);
};

export default Header;
