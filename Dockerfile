FROM node:18 AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build
RUN yarn global add typescript
RUN tsc server.ts

FROM node:18 AS server
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/server.js .
COPY --from=build /usr/src/app/node_modules ./node_modules
EXPOSE 4000
CMD ["node", "server.js"]

FROM nginx:alpine AS nginx-server
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]