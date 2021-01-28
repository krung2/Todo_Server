import { getConnection } from '@models/connection';

const load = async () => {
  await getConnection();
  console.log('[DB] Sync');
};

export default load;