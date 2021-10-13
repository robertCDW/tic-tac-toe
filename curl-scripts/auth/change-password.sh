# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://library-express-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
    }
  }'

echo
