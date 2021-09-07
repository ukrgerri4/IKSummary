FROM node:lts as build
# Set working directory
WORKDIR /app
# Copy and install local npm packages
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --no-optional
# Copy the remaining source code
COPY . .
RUN npm run build

FROM nginx:alpine AS final
RUN rm -f /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
