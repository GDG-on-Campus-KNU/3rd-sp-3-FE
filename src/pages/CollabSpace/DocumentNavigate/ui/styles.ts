import styled from 'styled-components';

export const TitleText = styled.div`
	display: flex;
	text-align: center;
	margin: 2rem 0 3rem 0;
	justify-content: center;
	align-items: center;
	font-size: 1.8rem;
	font-weight: 700;
`;

export const ContentSection = styled.div`
	margin: 0.5rem 0 2rem 0;
	/* display: flex; */
	text-align: center;
`;

export const SubTitleText = styled.span`
	margin: 1rem 0 1rem 5rem;
	font-size: 1.2rem;
	text-align: left;
`;

export const DocumentSection = styled.section`
	background-color: #d9d9d9;
	display: inline-block;
	padding: 5.8rem;
	margin: 1rem;
	text-align: left;

	position: relative;
`;

export const DocumentTItle = styled.div`
	position: absolute;
	font-size: 1.2rem;
	font-weight: 700;
	left: 0;
	bottom: 2.5rem;
	margin-left: 1rem;
`;

export const DocumentDate = styled.div`
	position: absolute;
	left: 0;
	bottom: 1rem;
	margin-left: 1rem;
`;
