import config from './config'

export const staticUrl = (path) => {
  return `${config.staticPrefix}${path}`;
}
