import { browser } from '$app/env';
import { writable } from 'svelte/store';


function initial() {
    if (browser) {
        return localStorage.getItem("festival-refresh") || "";
    }

    return "";
}
  
export const refresh_token = writable<string>(initial());
  
refresh_token.subscribe((value) => {
    if (browser) {
        localStorage.setItem("festival-refresh", value);
    }
});
  
export { refresh_token as default };
