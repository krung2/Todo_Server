import { getConnection } from '@models/connection';
import { Container } from 'typedi';
import { useContainer } from 'typeorm';

const load = async () => {
  useContainer(Container);
  await getConnection();
  console.log('[DB] Sync');
};

export default load;