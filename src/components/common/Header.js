import React from "react";
import styled from "styled-components";
import { Link as RRDomLink } from "react-router-dom";
//workaround^for custom attributes

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

//intellisense - can pass styled component
//inherits all styles from Menu
// const MenuAlt = styled(Menu)`
// 	border-top: solid 5px black;
// `;

//
const Link = ({ isActive, children, ...props }) => {
	return <RRDomLink {...props}>{children}</RRDomLink>;
};

//Styled React Component
const StyledLink = styled(Link)`
	padding: 4px 8px;
	display: block;
	text-align: center;
	box-sizing: border-box;
	margin: auto 0;

	font-size: ${(p) => (p.isActive ? "2em" : "1em")};
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Menu>
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/login" isActive>
					Login
				</StyledLink>
			</Menu>
		</HeaderWrapper>
	);
};

export default Header;
