FROM node:18-alpine
WORKDIR /app

# 個別指定でコピーを明示
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY . .

CMD ["npm", "run", "start:dev"]
