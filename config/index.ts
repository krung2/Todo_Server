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