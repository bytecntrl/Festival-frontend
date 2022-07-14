import { baseUrl } from "$lib/constants";
import access_token from "$store/access_token";
import refresh_token from "$store/refresh_token";


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
