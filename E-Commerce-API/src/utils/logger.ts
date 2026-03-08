import pino from 'pino'

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'YYYY-MM-DD HH:mm:ss',
      ignore: 'pid,hostname'
    }
  }
})

export default logger