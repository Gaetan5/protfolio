type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  private formatMessage(level: LogLevel, message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    return { prefix, message, data };
  }

  info(message: string, data?: any) {
    const { prefix, message: msg, data: d } = this.formatMessage('info', message, data);
    console.log(
      `%c${prefix} %c${msg}`,
      'color: #06b6d4; font-weight: bold',
      'color: inherit',
      d || '',
    );
  }

  warn(message: string, data?: any) {
    const { prefix, message: msg, data: d } = this.formatMessage('warn', message, data);
    console.warn(
      `%c${prefix} %c${msg}`,
      'color: #eab308; font-weight: bold',
      'color: inherit',
      d || '',
    );
  }

  error(message: string, data?: any) {
    const { prefix, message: msg, data: d } = this.formatMessage('error', message, data);
    console.error(
      `%c${prefix} %c${msg}`,
      'color: #ef4444; font-weight: bold',
      'color: inherit',
      d || '',
    );
  }

  debug(message: string, data?: any) {
    if (this.isProduction) return;
    const { prefix, message: msg, data: d } = this.formatMessage('debug', message, data);
    console.debug(
      `%c${prefix} %c${msg}`,
      'color: #8b5cf6; font-weight: bold',
      'color: inherit',
      d || '',
    );
  }
}

export const logger = new Logger();
