import { useEffect } from "react";
import { fetchUserProfile } from "@/features/user/api/apiService";
import { useUserStore } from "@/features/user/model/store";

export const useUserProfile = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchUserProfile();
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);

        // API가 실제로 호출되지 않으므로 아래 코드는 주석 처리
        // 실제로 API가 호출되면 주석을 해제하고 사용
        // setCurrentUser(null);

        // 테스트를 위해 하드코딩으로 사용자 데이터 설정
        setUser({
          currentChatRoomId: null,
          id: "1",
          name: "Junhyeok Chae",
          email: "cjh4302@gmail.com",
        });
      }
    };

    fetchUserData();
  }, [setUser]);

  return currentUser;
};
