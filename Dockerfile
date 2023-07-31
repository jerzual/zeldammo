# two step build, first we install deps and build
FROM node:18 as builder
# copy package.json and package-lock.json inside image
# this will allow docker to cache the npm install file
COPY package*.json .
# install dependencies
RUN npm install
# copy the rest of the source code
COPY . .
# build the app
RUN npm run build 
# second step, run phase
FROM node:18 as runner
COPY --from=builder package*.json .
RUN npm install --omit=dev
# copy bundled files to runner
COPY --from=builder dist dist
# run the server
CMD [ "node", "./dist/server/index.js" ]