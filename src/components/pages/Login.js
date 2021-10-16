import { Input, Spinner } from "components/common";
import PasswordInput from "components/common/PasswordInput";
import Button from "components/common/Button";
import PageLayout from "components/common/PageLayout";
import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

const Form = styled.form`
	width: 100%;
	max-width: 400px;
	background: white;
	border: 1px solid #eee;
	padding: 16px;
	box-sizing: border-box;
	color: black;
	border-radius: 4px;

	.alt-text {
		text-align: center;
		margin: 10px 0;
	}
`;
let timeout;
const Login = () => {
	const [formFields, setFormFields] = useState({ username: "", password: "" });
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e) => {
		e.persist();
		setFormFields((s) => ({
			...s,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		//2 seconds after submitting form loading gets reset
		timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	useEffect(() => {
		if (timeout) {
			clearTimeout(timeout);
		}
	}, []);
	return (
		<PageLayout>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
				{loading ? (
					<Spinner />
				) : (
					<>
						<Input
							value={formFields.username}
							name="username"
							type="text"
							placeholder="Username"
							onChange={handleInputChange}
						></Input>
						<PasswordInput
							value={formFields.password}
							name="password"
							onChange={handleInputChange}
						></PasswordInput>
					</>
				)}
				<Button secondary large type="submit" disabled={loading}>
					{loading ? "Loading" : "Login"}
				</Button>
				{!loading && (
					<>
						<div className="alt-text">or</div>
						<Button type="button">Register</Button>
					</>
				)}
			</Form>
		</PageLayout>
	);
};

export default Login;
