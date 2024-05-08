// import styled, { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import GoogleLogo from '../../../assets/Google-Logo.svg';

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

export const LoginButton = styled.button`
	background-color: #ffffff;
	color: #000;
	width: 20rem;
	gap: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	border: 1px solid #cccccc;
	border-radius: 1rem;
	padding: 1rem 2rem;
	margin: 1rem;
	/**
	 * box-shadow: h-shadow v-shadow blur spread color inset;
	 */
	box-shadow: 5px 5px 5px 0.5px #dcdcdc;
`;

export const LogoImg = styled.div`
	background-image: url(${GoogleLogo});
	background-size: cover;
`;
