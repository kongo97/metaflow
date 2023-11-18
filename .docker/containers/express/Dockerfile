# immagine Node.js come base
FROM node:latest as build

# working directory all'interno del container
WORKDIR /app

# copy package*.json nella directory di lavoro
COPY package*.json /app/

# installazione delle dipendenze
RUN npm install

# installazione di express
RUN npm install express --save

# copy * nella directory di lavoro
COPY . /app

# Esegui il comando per avviare l'applicazione Vue
CMD ["tail", "-f", "/dev/null"]