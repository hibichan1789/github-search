import type { GitHubUser, GitHubRepo} from "./types";
import {getUser, getRepo} from './api';
import { renderUser, createView, renderRepos } from "./dom";

const searchButton = document.getElementById("search-button") as HTMLButtonElement;
const inputName = document.getElementById("username") as HTMLInputElement;
const state = document.getElementById("search-state") as HTMLParagraphElement;
searchButton.addEventListener("click",async(event)=>{
    event.preventDefault();
    createView();
    searchButton.disabled = true;
    state.textContent = "取得中";
    const username = inputName.value.trim();
    if(username === ""){
        state.textContent = "ユーザー名が空です";
        searchButton.disabled = false;
        return;
    }
    const [user, repos] = await Promise.all([getUser(username), getRepo(username)]);
    inputName.value = "";
    searchButton.disabled = false;
    if(!user || !repos){
        state.textContent = "404 NotFound";
        return;
    }
    state.textContent = "取得が完了しました";
    console.log(repos)
    renderUser(user);
    renderRepos(repos);
});