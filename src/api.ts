import type {GitHubUser, GitHubRepo} from "./types";
const apiUrl = import.meta.env.VITE_GITHUB_API_URL;
const repoQuery = import.meta.env.VITE_GITHUB_API_REPO;
export async function getUser(username:string):Promise<GitHubUser|null>{
    const userUrl = `${apiUrl}/${username}`;
    try{
        const response = await fetch(userUrl);
        if(!response.ok){
            throw new Error("通信に失敗しました");
        }
        const user:GitHubUser = await response.json();
        return user;
    }
    catch(e){
        console.error("通信に失敗しました");
        return null;
    }
}
export async function getRepo(username:string):Promise<GitHubRepo[]|null>{
    const repoUrl = `${apiUrl}/${username}/${repoQuery}`;
    try{
        const response = await fetch(repoUrl);
        if(!response.ok){
            throw new Error("通信に失敗しました");
        }
        const repo:GitHubRepo[] = await response.json();
        return repo;
    }
    catch(e){
        console.error("通信に失敗しました", e);
        return null
    }
}