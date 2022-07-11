import { baseUrl } from "../constants";


export async function login(username: string, password: string) {
    let p = new URLSearchParams(
        {
            "username": username,
            "password": password
        }
    )

    return await fetch(`${baseUrl}/auth/?${p}`,
        {
            method: "GET",
        }
    )
    .then(
        (r) => {
            let re = r.json()
            return re
        }
    )
    .catch(
        (err) => console.log(err)
    )
}