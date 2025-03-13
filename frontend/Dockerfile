FROM node:18-alpine
WORKDIR /app

# `package.json` を正しくコピー
COPY ./package.json ./package-lock.json ./

# `node_modules` をインストール
RUN npm ci

# 残りのファイルをコピー
COPY . .

CMD ["npm", "run", "dev"]
