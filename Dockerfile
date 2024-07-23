FROM --platform=linux/amd64 node:19

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Copier les fichiers de configuration depuis le répertoire parent
COPY ../package*.json ./
COPY ../tsconfig.json ./

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]