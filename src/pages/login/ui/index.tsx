import * as Styles from './style';

export const LoginPage: React.FC = () => {
	return (
		<>
			<Styles.LoginPageLayout>
				<Styles.GlobalStyle />
				<Styles.LoginSection>
					<Styles.LoginText>
						간편하게 로그인하고
						<Styles.LoginInnerText>
							Mohaji를 이용해보세요 !
						</Styles.LoginInnerText>
						<Styles.LoginButton>
							<Styles.LogoImg />
							Google로 계속하기
						</Styles.LoginButton>
					</Styles.LoginText>
				</Styles.LoginSection>

				{/* <StyleBackground></StyleBackground> */}
			</Styles.LoginPageLayout>
		</>
	);
};
