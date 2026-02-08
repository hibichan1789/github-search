# github-searchアプリ
ユーザー名を打つことでユーザーの情報を取得できます  
このアプリは[github rest api](https://docs.github.com/en/rest?apiVersion=2022-11-28)を使用しています  

## 修正点、変更点
dom.ts,main.tsにDOM操作の実装をする  
## 今回学んだこと
git init を異なる階層で最初してしまったが、ミスに気付いて修正することができた  
.gitのフォルダを完全に消すことでやり直せる  
viteで環境変数を取得するにはtsconfig.json("module": "esnext","target": "esnext","moduleResolution": "bundler")、package.json("type":"module")を新しい設定に変える  

## 所感
fetch関数の実装は前回した、名言generatorのおかげでスムーズにできた気がする  