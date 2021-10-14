# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo
