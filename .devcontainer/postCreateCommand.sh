#!/usr/bin/env bash

npm install

npx nx run backend-api-angular:generate-api

cd libs/database-api
    [ -f .env ] || cp .env.example .env
    npx prisma migrate dev
    npx prisma generate
cd ../..
