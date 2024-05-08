import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { GOOGLE_API_KEY, GOOGLE_REDIRECT_URI } from '@/shared/api/google-login';
// import Logo from '@/assets/Google-Logo.svg';
// import * as Styles from './styles';
// import { memo } from 'react';
import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';

export const LoginButton: React.FC = () => {
	const clientId: string = GOOGLE_API_KEY;
	const redirectUri: string = GOOGLE_REDIRECT_URI;

	// const handleLogin = () => {
	// 	// 구글 로그인 화면으로 이동시키기
	// 	window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
	// 		client_id=${GOOGLE_API_KEY}
	// 		&redirect_uri=${GOOGLE_REDIRECT_URI}
	// 		&response_type=code
	// 		&scope=https://www.googleapis.com/auth/userinfo.email`;
	// };

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
