FROM node:18-alpine
WORKDIR /app

# 正しくコピー（contextが./frontendなので、ファイルはルートに存在する）
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
