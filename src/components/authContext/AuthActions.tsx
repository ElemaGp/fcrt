export type loginSuccessUserProp = {
    email: string,
    password: string,
} 

export const loginStart = () =>({
    type:"LOGIN_START",
});
export const loginSuccess = (user:loginSuccessUserProp) =>({
    type:"LOGIN_SUCCESS",
    payload: user, 
});
export const loginFailure = (errMessage:string) =>({
    type:"LOGIN_FAILURE",
    payload: errMessage,
});


//logout

export const logout = () =>({
    type:"LOGOUT",
});