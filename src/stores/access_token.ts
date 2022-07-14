import { browser } from '$app/env';
import { writable } from 'svelte/store';


function initial() {
    if (browser) {
        return localStorage.getItem("festival-access") || "";
    }

    return "";
}
  
export const access_token = writable<string>(initial());
  
access_token.subscribe((value) => {
    if (browser) {
        localStorage.setItem("festival-access", value);
    }
});

  
export { access_token as default };
