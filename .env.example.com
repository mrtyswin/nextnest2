PORT=3001
DB_HOST=database
DB_PORT=5432

# PostgreSQLコンテナ用 (絶対にこの名前にする！)
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb

# バックエンドのTypeORM用
DB_USER=user
DB_PASSWORD=password
DB_NAME=mydb

FRONTEND_ORIGIN=http://localhost:3000
