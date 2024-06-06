import { GoogleLogin } from '@/features/login/ui';
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
						<GoogleLogin />
					</Styles.LoginText>
				</Styles.LoginSection>
			</Styles.LoginPageLayout>
		</>
	);
};

// https://localhost:5173/accounts/google/login/callback/
// #access_token=ya29.a0AXooCgswUqKq9IOaSs4weKNxrDWaoiY65a7uMdNpL2tHtng1kxdEZXKHSeu_OpYphcdGCPrv1S_dzs2ev5INo_keNUukoZ95x0zeq5a5xvVVDt7t-RpYMGSa_4Zc2pEkIuiRgF77y4WaD8YJvUAtq3E-7YUySE80EwaCgYKAboSARMSFQHGX2MinaIgRpPGlse1wnVh0syb-A0169&token_type=Bearer&expires_in=3599&scope=email%20https://www.googleapis.com/auth/userinfo.email%20openid&authuser=0&hd=knu.ac.kr&prompt=consent
