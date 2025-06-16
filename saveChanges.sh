echo "write what you changed & hit enter"
read commit_message
git add .
git commit -m "$commit_message"
git push