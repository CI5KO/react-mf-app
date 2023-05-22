# pull official base image
FROM node:19.2-alpine

# set working directory
WORKDIR /Users-Back

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Expose port 4002
EXPOSE 4002

# install app dependencies
COPY package.json ./
RUN npm install --silent

# add app
COPY . .

# run build before start
RUN npm run build

# start app
CMD ["npm", "start"]