// import { useAuthStore } from '@/features/login/model/store';
// import { ReactElement } from 'react';
// import axios from 'axios';
// import { CustomBtn } from '@/widgets/login/ui';

// export const Logout = (): ReactElement => {
// 	const logout = useAuthStore((state) => state.logout);
// 	const authToken = useAuthStore((state) => state.authToken);
// 	const handleLogout = async () => {
// 		logout();
// 		await axios
// 			.post(`https://oauth2.googleapis.com/revoke?token=${authToken}`)
// 			.then(() => {
// 				window.location.assign('https://localhost:5173/');
// 			})
// 			.catch(() => {
// 				alert('로그아웃에 실패했습니다.');
// 			});
// 	};

// 	return <CustomBtn onClick={handleLogout}>logout</CustomBtn>;
// };
