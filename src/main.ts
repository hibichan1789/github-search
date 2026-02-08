import type { GitHubUser, GitHubRepo} from "./types";
import {getUser, getRepo} from './api';

const searchButton = document.getElementById("search-button") as HTMLButtonElement;
const inputName = document.getElementById("username") as HTMLInputElement;
const state = document.getElementById("search-state") as HTMLParagraphElement;
searchButton.addEventListener("click",async(event)=>{
    event.preventDefault();
    searchButton.disabled = true;
    state.textContent = "取得中";
    const username = inputName.value;
    inputName.value = "";
    if(username === ""){
        state.textContent = "ユーザー名が空です";
        searchButton.disabled = false;
        return;
    }
    const [user, repo] = await Promise.all([getUser(username), getRepo(username)]);
    searchButton.disabled = false;
    if(!user || !repo){
        state.textContent = "404 NotFound";
        return;
    }
    state.textContent = "取得が完了しました";
    console.log(user);
    console.log(repo);
});