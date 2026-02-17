#!/usr/bin/env bash

npm install

npx nx run backend-api-angular:generate-api

pushd libs/database-api
    npx prisma migrate dev
    npx prisma db seed
    npx prisma generate
popd
