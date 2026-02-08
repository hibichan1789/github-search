# github-searchアプリ
ユーザー名を打つことでユーザーの情報を取得できます  
このアプリは[github rest api](https://docs.github.com/en/rest?apiVersion=2022-11-28)を使用しています  
cp .env.sample .env をしてAPIのURLに書き換えをしてください  
## 技術スタック
Vite, TypeScript, CSS (Vanilla)  


## 修正点、変更点
style.cssを変更して装飾を加えた    
## 今回学んだこと
git init を異なる階層で最初してしまったが、ミスに気付いて修正することができた  
.gitのフォルダを完全に消すことでやり直せる  
viteで環境変数を取得するにはtsconfig.json("module": "esnext","target": "esnext","moduleResolution": "bundler")、package.json("type":"module")を新しい設定に変える  
scrollbar-gutter: stable;　これをhtmlのCSSにいれることでスクロールバー分の幅を取ってくれるからがたつきがなくなる  
## 所感
fetch関数の実装は前回した、名言generatorのおかげでスムーズにできた気がする  
意外と簡単にDOM操作、fetchを切り分けてmain.tsを薄くすることができた  