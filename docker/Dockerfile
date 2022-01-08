FROM node:17.3

LABEL maintainer="Hasmukh Mistry <hasmukhmistry137@gmail.com>"

RUN apt-get update -y

# Essentials
RUN apt-get -y install build-essential \
    wget curl gnupg lsb-release gcc make git autoconf libc-dev pkg-config xsel

# Using Ubuntu
RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

# Switching user to node
USER node

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin:/app/node_modules/.bin/
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm i -g npm@latest yarn@latest npx serve jsdoc

WORKDIR /app

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]
