import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
// import { RegisterPage } from '@/pages/Register/ui';
import { LoginPage } from '@/pages/login/ui/login';
import { SocialLogin } from '@/pages/login/ui/socialLogin';
import { Home } from '@/pages/login/ui/home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'auth',
		children: [
			{
				path: 'login',
				// element: <LoginPage />,
				element: <Home />,
			},
			{
				path: 'redirect',
				element: <SocialLogin />,
			},
		],
	},
]);
