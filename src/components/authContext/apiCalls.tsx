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

    const error = "Wrong Email or Password"

    dispatch(loginStart());
    
    if(JSON.stringify(user) === JSON.stringify(dummyUser)){
        dispatch(loginSuccess(user));
    }else{
        dispatch(loginFailure(error));
    };

    }
    


