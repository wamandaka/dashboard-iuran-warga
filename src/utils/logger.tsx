interface Logger {
  info: (message: string, data?: unknown) => void;
  error: (message: string, data?: unknown) => void;
  warn: (message: string, data?: unknown) => void;
}

const logger: Logger = {
  info: (message, data = null) => {
    if (process.env.NODE_ENV !== "production") {
      const date = new Date().toLocaleString();
      console.info(
        `Timestamp: ${date}, level: info, Message: ${message}`,
        data ?? ""
      );
    }
  },
  warn: (message, data = null) => {
    if (process.env.NODE_ENV !== "production") {
      const date = new Date().toLocaleString();
      console.warn(
        `Timestamp: ${date}, level: warn, Message: ${message}`,
        data ?? ""
      );
    }
  },
  error: (message, data = null) => {
    const date = new Date().toLocaleString();
    logger.error(
      `Timestamp: ${date}, level: error, Message: ${message}`,
      data ?? ""
    );
  },
};

// const logger: Logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()],
// });

export default logger;
