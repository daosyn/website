#! bash

STATUS="$(git status)"
git config --global --list

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]
then
    sed -i "" '/dist/d' ./.gitignore
    git add .
    git commit -S -m "deploy to gh-pages"
    git push origin `git subtree split --prefix dist master`:gh-pages --force
    git reset HEAD~
    git checkout .gitignore
else
    echo "need clean working directory to publish"
fi
