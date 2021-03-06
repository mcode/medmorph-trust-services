FROM node:14

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD npm start