import axios from "axios";
import { ReactElement } from "react";
import { useAuthStore } from "@/features/login/model/store";
import { CustomBtn } from "@/widgets/login/ui";

export const GetEmail = (): ReactElement => {
    const authToken = useAuthStore((state) => state.authToken);

    const CheckAuth = async (accessToken: string) => {
        await axios
        .get("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            }
        )
        .then((res) => {
            alert(res.data.email);
        })
        .catch((err) => {
            alert("oAuth token expired");
            window.location.assign("http://localhost:5173");
        });
    };
    return (
        <CustomBtn onClick={()=> {
            CheckAuth(authToken);
        }}>
            getEmail
        </CustomBtn>
    )
};