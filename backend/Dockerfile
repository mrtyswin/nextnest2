FROM node:18-alpine
WORKDIR /app

# 正しくコピー（contextが./backendなので、ファイルはルートに存在する）
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "start:dev"]
