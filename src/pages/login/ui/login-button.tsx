import {
	GoogleLogin,
	GoogleOAuthProvider,
	useGoogleLogin,
} from '@react-oauth/google';
import { GOOGLE_API_KEY, GOOGLE_REDIRECT_URI } from '@/shared/api/google-login';
import { jwtDecode } from 'jwt-decode';

export const LoginButton: React.FC = () => {
	const clientId: string = GOOGLE_API_KEY;
	const redirectUri: string = GOOGLE_REDIRECT_URI;

	return (
		<>
			{/* 라이브러리로 구현 */}
			<GoogleOAuthProvider clientId={clientId}>
				<GoogleLogin
					onSuccess={(credentialResponse: any) => {
						console.log(credentialResponse);
						console.log(jwtDecode(credentialResponse.credential));
					}}
					onError={() => {
						console.error('Failed Login...');
					}}
					useOneTap
				/>
			</GoogleOAuthProvider>
			{/* 버튼 직접 구현 */}
			{/* <Styles.LogoImg /> */}

			{/* <Styles.LoginButton onClick={handleLogin}>
				<img src={Logo} alt="logo" />
				Google로 계속하기
			</Styles.LoginButton> */}
		</>
	);
};
