FROM node:latest

ENV PORT 3000

# Create app directory
RUN mkdir -p /var/www/techbizz-portfolio
WORKDIR /var/www/techbizz-portfolio

# Copying source files
COPY . /var/www/techbizz-portfolio

# Installing dependencies
# COPY package*.json /var/www/techbizz-portfolio
RUN npm install

# Building app
# RUN npm run build --production
EXPOSE 3000

# Running the app
# CMD "npm" "run" "start"
