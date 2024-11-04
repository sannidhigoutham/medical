# Stage 1: Build the application
FROM node:16 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Remove this line if you don't need a build step
# RUN npm run build # Only keep this if you have a build script

# Stage 2: Create the final image
FROM node:16

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

EXPOSE 3000
CMD ["npm", "start"]
