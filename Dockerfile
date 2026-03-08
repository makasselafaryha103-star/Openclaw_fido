FROM node:20

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Render va vérifier ce port
EXPOSE 10000

CMD ["npm", "start"]
