# Etapa 1: build de la app
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: servir app con nginx
FROM nginx:alpine

# Copiar los archivos de build a la carpeta pública de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Eliminar configuración por defecto de nginx y usar custom si quieres
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
