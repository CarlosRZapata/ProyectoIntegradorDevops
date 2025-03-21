# Usar una imagen base con Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del proyecto
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que correrá la app
EXPOSE 4173

# Comando para iniciar la aplicación
CMD ["sh", "-c", "npm start"]