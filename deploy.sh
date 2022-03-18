# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:zainhubb/plum-demo.git master:gh-pages

# 这里的`<USERNAME>`替换为你自己的用户名，`<REPO>`换为准备存放`dist`的仓库名
cd -