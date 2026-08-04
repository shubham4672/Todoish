FROM node:20

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4800

CMD [ "npm", "start", "--", "--host", "0.0.0.0", "--port", "4800" ]