FROM node:16 AS builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn run build


FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./

CMD ["yarn", "run", "start"]