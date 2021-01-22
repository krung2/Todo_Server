import 'dotenv/config';

const getProcessEnv = (name: string): string => {
  const value = process.env[name];

  if (value === undefined) {
    const err = `${name} is undefined`;
    console.log(err);
    throw new Error(err);
  }
  return value;
};

export const PORT = getProcessEnv('PORT');

export const MYSQL = {
  DATABASE: getProcessEnv('MYSQL_DATABASE'),
  HOST: getProcessEnv('MYSQL_HOST'),
  PORT: parseInt(getProcessEnv('MYSQL_PORT'), 10),
  USERNAME: getProcessEnv('MYSQL_USERNAME'),
  PASSWORD: getProcessEnv('MYSQL_PASSWORD'),
  SYNCHRONIZE: getProcessEnv('MYSQL_SYNDCHRONIZE') === 'true',
};