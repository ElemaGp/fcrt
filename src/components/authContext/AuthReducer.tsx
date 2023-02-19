import { loginSuccessUserProp } from "./AuthActions";

type actionProp = {
    type: string,
    payload: loginSuccessUserProp
}


const AuthReducer = (state: any, action: actionProp) =>{
    switch (action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
                errorMessage: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
                errorMessage: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
                errorMessage: action.payload,
            };

            case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
                errorMessage: null,
            };
        
            default:
                return { ...state };
    }
};

export default AuthReducer;