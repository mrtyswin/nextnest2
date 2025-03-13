FROM node:18-alpine
WORKDIR /app

# package.json と package-lock.json を明示的にコピー
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
