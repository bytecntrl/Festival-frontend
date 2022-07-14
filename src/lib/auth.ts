import jwtDecode from 'jwt-decode';

import { baseUrl, ROLES } from "$lib/constants";
import access_token from "$store/access_token";
import refresh_token from "$store/refresh_token";


interface Token {
    username: string
    role: string
    exp: number
}


export async function login(username: string, password: string) {
    let p = new URLSearchParams(
        {
            "username": username,
            "password": password
        }
    );
        
    const response = await fetch(`${baseUrl}/auth/?${p}`,
        {
            method: "GET",
        }
    );
    const data = await response.json();

    if (response.ok) {
        access_token.set(data.token);
        refresh_token.set(data.reflesh_token);
    }

    return data;
}


export class Auth {
    private token = "";

    constructor(t: string) {
        this.token = t;
    }

    hasRoles(): boolean {
        if (this.isLoggedIn()) {
            return ROLES.includes((jwtDecode(this.token) as Token).role);
        }
        return false;
    }

    isLoggedIn(): boolean {
        return this.token !== "" && !this.isTokenExpired();
    }

    isTokenExpired(): boolean {
        if (this.token !== ""){
            return new Date((jwtDecode(this.token) as Token).exp *1000) < new Date();
        }
        return false;
    }

    isAdmin(): boolean {
        if (this.isLoggedIn()) {
            return (jwtDecode(this.token) as Token).role == "admin"
        }
        return false
    }

    getUsername(): string {
        return (jwtDecode(this.token) as Token).username
    }
}