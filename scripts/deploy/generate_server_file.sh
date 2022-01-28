IMAGE_URL="$ECR_ADDRESS/$APP_NAME:$CI_COMMIT_BRANCH"

if [ $CI_COMMIT_BRANCH = "dev" ]; then
    DATABASE_HOST=$PREPROD_DATABASE_HOST
    DATABASE_PORT=$PREPROD_DATABASE_PORT
    DATABASE_USER=$PREPROD_DATABASE_USER
    DATABASE_PASS=$PREPROD_DATABASE_PASS
    DATABASE_NAME=$PREPROD_DATABASE_NAME
fi

cat <<EOF
docker stop \$(docker ps -aq)
docker rm \$(docker ps -aq)
docker image prune -f

aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin $ECR_ADDRESS

docker pull $IMAGE_URL

docker run -d \
    -e PORT=80 \
    -e DATABASE_HOST=$DATABASE_HOST \
    -e DATABASE_PORT=$DATABASE_PORT \
    -e DATABASE_USER=$DATABASE_USERNAME \
    -e DATABASE_PASS=$DATABASE_PASSWORD \
    -e DATABASE_NAME=$DATABASE_NAME \
    -p 80:80 \
    -p 443:443 \
    $IMAGE_URL
EOF
