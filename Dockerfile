FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
# RUN chown -R node /app/node_modules
RUN npm ci
COPY . .
EXPOSE 5000
CMD ["npm", "start"]

# FROM node:alpine

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD ["npm", "start"]

# docker build -t nodeproj .
# docker run --publish 5000:5000 nodeproj