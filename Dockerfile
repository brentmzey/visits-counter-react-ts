FROM node:alpine

WORKDIR "/app"

COPY package.json .
RUN npm install
COPY ./built .

CMD ["npm", "start"]