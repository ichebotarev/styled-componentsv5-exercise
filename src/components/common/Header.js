import React, { useState } from "react";
import styled from "styled-components";
import { Link as RRDomLink, useLocation } from "react-router-dom";
//workaround^for custom attributes

const HeaderWrapper = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	position: fixed;
	top: 0;
	background-image: linear-gradient(to right, #29f804, #fdd54f);
	border-bottom: 3px solid #fdd54f;
`;
const Menu = styled.nav`
	display: block;
	position: absolute;
	width: 100%;
	top: 60px;
	left: 0%;
	padding: 8px;
	box-sizing: border-box;
	border-bottom: 3px solid #fdd54f;
	background: white;

	@media (min-width: 768px) {
		display: flex;
		background: none;
		left: initial;
		top: initial;
		position: relative;
		width: initial;
		border-bottom: none;
		margin: auto 0 auto auto;
	}
`;

//intellisense - can pass styled component
//inherits all styles from Menu
// const MenuAlt = styled(Menu)`
// 	border-top: solid 5px black;
// `;

//destructuring isActive from Link comp and its not passing down to RRDOMLink, attribute never set so no error
const Link = ({ isActive, children, ...props }) => {
	return <RRDomLink {...props}>{children}</RRDomLink>;
};

//Styled React Component (overriding link)
const StyledLink = styled(Link)`
	padding: 4px 8px;
	display: block;
	text-align: center;
	box-sizing: border-box;
	margin: auto 0;
	color: black;

	font-weight: ${(p) => (p.isActive ? "800" : "100")};
`;

const MobileMenuIcon = styled.div`
	margin: auto 0 auto auto;
	width: 25px;
	min-width: 25px;
	padding: 5px;

	> div {
		height: 3px;
		background: black;
		margin: 5px 0;
		width: 100%;
	}
`;

const Header = () => {
	const { pathname } = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<HeaderWrapper>
			<MobileMenuIcon>
				<div />
				<div />
				<div />
			</MobileMenuIcon>
			<Menu>
				<StyledLink to="/" isActive={pathname === "/"}>
					Home
				</StyledLink>
				<StyledLink to="/login" isActive={pathname === "/login"}>
					Login
				</StyledLink>
			</Menu>
		</HeaderWrapper>
	);
};

export default Header;
