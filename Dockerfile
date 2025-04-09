FROM node:22.14.0-slim

WORKDIR /cosmos

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD pnpm run seed create && pnpm run seed insert && pnpm run start
