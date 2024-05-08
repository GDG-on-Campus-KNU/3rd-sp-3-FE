import { LoginButton } from './login-button';
import * as Styles from './styles';

export const LoginPage: React.FC = () => {
	return (
		<>
			<Styles.LoginPageLayout>
				<Styles.LoginSection>
					<Styles.LoginText>
						간편하게 로그인하고
						<Styles.LoginInnerText>
							Mohaji를 이용해보세요 !
						</Styles.LoginInnerText>
						<LoginButton />
					</Styles.LoginText>
				</Styles.LoginSection>
			</Styles.LoginPageLayout>
		</>
	);
};
