# Imagen base con Node
FROM node:20-alpine

# Carpeta de trabajo en el contenedor
WORKDIR /app

# Copiamos package.json e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el código fuente
COPY . .

# Exponemos el puerto donde corre Vite (5173)
EXPOSE 5173

# Comando por defecto: modo desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]