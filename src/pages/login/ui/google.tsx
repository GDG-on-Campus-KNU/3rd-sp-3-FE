import { GOOGLE_API_KEY, GOOGLE_REDIRECT_URI } from "@/shared/api/google-login";
import { ReactElement } from "react";
import { CustomBtn } from "@/widgets/login/ui";


export const Google = (): ReactElement => {
    const GOOGLE_ID = GOOGLE_API_KEY;
    const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:5173/redirect&scope=https://www.googleapis.com/auth/userinfo.email`;
    // const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_ID}&response_type=token&redirect_uri=${GOOGLE_REDIRECT_URI}t&scope=https://www.googleapis.com/auth/userinfo.email`;
    // const GoogleURL: string = `https://accounts.google.com/o/oauth2/v2/auth?
    //     client_id=${GOOGLE_API_KEY}&
    //     &redirect_uri=${GOOGLE_REDIRECT_URI}&
    //     &response_type=token&
    //     &scope=https://www.googleapis.com/auth/userinfo.email`;
    
    const oAuthHandler = (): void => {
        window.location.assign(GoogleURL);
    };

    return <CustomBtn onClick={oAuthHandler}>Google Login하기</CustomBtn>;
}