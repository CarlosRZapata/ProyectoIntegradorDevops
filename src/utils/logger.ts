import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(), // Muestra los logs en consola
    new winston.transports.File({ filename: "logs/app.log" }) // Guarda logs en un archivo
  ],
});

export default logger;