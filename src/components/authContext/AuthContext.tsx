import AuthReducer from "./AuthReducer";
import {createContext, ReactNode, useEffect, useReducer} from "react";
import React from "react";
import { loginSuccessUserProp } from "./AuthActions";

export type initialStateArgument = {
    user: loginSuccessUserProp | null
    isFetching: boolean
    error: boolean
    errorMessage: string | null
    dispatch?: React.Dispatch<any>
}

const userLs = localStorage.getItem("user");

const INITIAL_STATE:initialStateArgument = {
    user: userLs ? JSON.parse(userLs) : null, 
    isFetching: false,
    error: false,
    errorMessage: null
};

export const AuthContext = createContext(INITIAL_STATE);

type authContextProviderProps = {
    children: ReactNode
}


export const AuthContextProvider = ({children} : authContextProviderProps) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    //storing the user object in the localstorage whenever it's generated after login
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user)) 
    },[state.user]);

    return (
        <AuthContext.Provider 
        value={{
            user:state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            errorMessage: state.errorMessage,
            dispatch
        }}
        >
          {children}
          </AuthContext.Provider>
    );
};