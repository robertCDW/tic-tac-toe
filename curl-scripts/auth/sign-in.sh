# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

# existing details: new@new
# password: 123
# EMAIL=new@new PASSWORD=123 sh curl-scripts/auth/sign-in.sh

curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
  }'

echo
