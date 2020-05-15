import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    console.log("using interceptro");
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;

});

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || false
    }

    const [ userState, setUserState ] = useState(initState);

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: ""
        });
    }
  
    function addEvent(eventData) {
        let config = {headers: {Authorization: ""}};
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        console.log(config);
        axios.post("/api/event", eventData, config)
        .then(res => {
            //Do something here
        });
    }
    function authUser(userData) {
        axios.post("/api/auth/login", userData)
        .then(res => {
            const { user, token, avatarURL } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            console.log(res.data);
            setUserState(prevUserState => ({
                ...prevUserState,
                avatarUrl: avatarURL,
                user,
                token
            }))

        })
        .catch(err => console.log(err));
      }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                authUser,
                logout,
                addEvent
            }}>
                { props.children }
            </UserContext.Provider>
    )

}