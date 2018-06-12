import { observable, autorun, toJS } from "mobx";


interface Error {
    summary?: string;
}

interface User {
    email: string;
    password: string;
    name: string;
    id: string;
}

interface UserState {
    errors: Error;
    user: User;
    isAuth: boolean
}


let localStorage = null;

export const signup = () => {
    return fetch("/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(toJS(userState.user)),
    }).then(resp => {
        if (resp.status === 200) {
            return {
                status: "success",
                message: "user successfully signed up",
            };
        } else {
            return {
                status: "error",
                message: "could not sign up user",
            };
        }
    }).catch(error => {
        debugger;
        console.log("really unable to authenticate");
    });
};

export const login = () => {
    let userAsJson = toJS(userState.user);
    console.log(userAsJson);
    return fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password: userAsJson.password,
            email: userAsJson.email,
        }),
    }).then(resp => {
        if (resp.status === 200) {
            return resp.json();
        } else {
            throw new Error("Error in response from /auth/login: ", resp.status);
        }
    }).then(json => {
        userState.user.id = json.user.id;
        authenticate(json.token);
    }).catch(error => {
        debugger;
        console.log("cannot login");
    });
};

export const logout = () => {
    return new Promise((resolve, reject) => {
        deauthenticate();
        resolve();
    });
};

function isAuthenticated(): boolean {
    if (localStorage !== null) {
        return localStorage.getItem("authToken") !== null;
    } else {
        return false;
    }
}

function deauthenticate() {
    if (localStorage !== null) {
        localStorage.removeItem("authToken");
        userState.isAuth = false;
    }

}

function authenticate(token) {
    if (localStorage !== null) {
        localStorage.setItem("authToken", token);
        userState.isAuth = true;
    }
}

export const getToken = () => {
    if (localStorage) {
        return localStorage.getItem("authToken");
    }
};

// TODO not necessary to make observable, nothing changes dynamically here yet
const userState: UserState = {
    errors: {},
    user: {
        email: "",
        password: "",
        name: "",
        id: null,
    },
    isAuth: isAuthenticated(),
};



// must be specific about the exact field we want for autorun to work
// autorun(() => console.log(`email: ${userState.user.email}`));
// this doesn't work
// autorun(() => console.log(userState.user));

export default observable(userState);
