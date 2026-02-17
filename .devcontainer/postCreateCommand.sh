#!/usr/bin/env bash

npm install

npx nx run backend-api-angular:generate-api

cd libs/database-api
    npx prisma migrate dev
    npx prisma generate
cd ../..
