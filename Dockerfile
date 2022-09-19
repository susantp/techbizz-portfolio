FROM node:latest


# Create app directory
RUN mkdir -p /techbizz-portfolio
WORKDIR /the/workdir/path
EXPOSE 3002