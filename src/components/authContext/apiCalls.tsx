// import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

type userProp = {
    email: string,
    password: string
}

export const login = (user:userProp, dispatch: any) => {

    const dummyUser = {
        email: "foodcourt@gmail.com",
        password: "foodcourt123"
    }

    const error = "Wrong Username or Password"

    dispatch(loginStart());

    console.log(user);
    console.log(dummyUser);
    
    if(JSON.stringify(user) === JSON.stringify(dummyUser)){
        dispatch(loginSuccess(user));
        console.log("success");
    }else{
        dispatch(loginFailure(error));
        console.log("fail");
    };

    }
    


