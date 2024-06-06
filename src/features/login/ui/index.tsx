import { GOOGLE_API_KEY, GOOGLE_REDIRECT_URI } from '@/shared/api/google-login';
import { ReactElement } from 'react';
import { LoginButton } from './styles';
import Logo from '@/assets/Google-Logo.svg';

export const GoogleLogin = (): ReactElement => {
	const GOOGLE_ID = GOOGLE_API_KEY;
	const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;

	const oAuthHandler = (): void => {
		window.location.assign(GoogleURL);
	};

	return (
		<LoginButton onClick={oAuthHandler}>
			<img src={Logo} alt="logo" />
			Google로 계속하기
		</LoginButton>
	);
};
