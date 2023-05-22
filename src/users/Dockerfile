# pull official base image
FROM node:19.2-alpine

# set working directory
WORKDIR /users

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Expose port 3002
EXPOSE 3002

# install app dependencies
COPY package.json ./
RUN npm install --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]