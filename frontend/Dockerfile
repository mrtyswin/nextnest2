FROM node:18-alpine
WORKDIR /app

# `package.json` を明示的にコピー
COPY package.json package-lock.json ./

# `node_modules` をインストール
RUN npm ci

# 残りのコードをコピー
COPY . .

CMD ["npm", "run", "dev"]
