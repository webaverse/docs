export USE_SSH=true
export CURRENT_BRANCH=master
git push; cd website;  yarn run publish-gh-pages; cd ..