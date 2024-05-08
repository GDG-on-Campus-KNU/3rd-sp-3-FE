// import styled, { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const LoginPageLayout = styled.div`
	background-color: #c0e7df;
	width: 100vw;
	height: 100vh;
`;

export const LoginSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 40rem;
`;

export const LoginText = styled.div`
	background-color: #fcfcfc;
	padding: 6rem 9rem;
	border-radius: 2rem;
	text-align: center;
	color: #63aea0;
	font-size: 2rem;
	margin: 1rem;

	box-shadow: 2px 5px 5px 1px #c0c0c0;
`;

export const LoginInnerText = styled.div`
	font-size: 2rem;
	font-weight: 700;
	margin-top: 0.5rem;
`;
