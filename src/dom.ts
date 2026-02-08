import type { GitHubUser, GitHubRepo} from "./types";

const userArea = document.getElementById("user-area")! as HTMLDivElement;
const repoArea = document.getElementById("repo-area")! as HTMLDivElement;

export function renderUser(user:GitHubUser):void{
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const userImage = document.createElement("img");
    userImage.src = user.avatar_url;
    userImage.alt = user.avatar_url;

    const userName = document.createElement("h2");
    userName.textContent = user.login;

    const bio = document.createElement("p");
    bio.textContent = user.bio ?? "自己紹介はありません";

    const publicRepos = document.createElement("p");
    publicRepos.textContent = `リポジトリ数: ${user.public_repos} 個`;

    const follower = document.createElement("p");
    follower.textContent = `フォロワー: ${user.followers}人`;

    const following = document.createElement("p");
    following.textContent = `フォロー: ${user.following}人`;

    userCard.appendChild(userImage);
    userCard.appendChild(userName);
    userCard.appendChild(bio);
    userCard.appendChild(publicRepos);
    userCard.appendChild(follower);
    userCard.appendChild(following);

    userArea.appendChild(userCard);
}

export function renderRepos(repos:GitHubRepo[]):void{
    const title = document.createElement("h2");
    title.textContent = "Repositories";
    repoArea.appendChild(title);

    const repoCards = document.createElement("div");
    repoCards.classList.add("repo-cards");
    repos.forEach(repo=>{
        const repoItem = document.createElement("div");
        
        const repoName = document.createElement("h3");
        repoName.textContent = repo.name;

        const repoUrlPara = document.createElement("p");
        const repoUrl = document.createElement("a");
        repoUrl.href = repo.html_url;
        repoUrl.target = "_blank";
        repoUrl.rel = "noopener noreferrer";
        repoUrl.textContent = repo.html_url;
        repoUrlPara.appendChild(repoUrl);

        const repoDescription = document.createElement("p");
        repoDescription.textContent = repo.description ?? "説明はありません";

        const repoStargazers = document.createElement("p");
        repoStargazers.textContent = `スター数: ${repo.stargazers_count}`;

        repoItem.appendChild(repoName);
        repoItem.appendChild(repoUrlPara);
        repoItem.appendChild(repoDescription);
        repoItem.appendChild(repoStargazers);
        repoCards.appendChild(repoItem);
    });
    repoArea.appendChild(repoCards)
}

export function createView():void{
    userArea.innerHTML = "";
    repoArea.innerHTML = "";
}