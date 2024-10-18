import crypto from 'node:crypto';
import KeyvRedis from '@keyv/redis';
import KeyvSqlite from '@keyv/sqlite';
import { createSessionStorage } from '@remix-run/node';
import createDebug from 'debug';
import Keyv, { type KeyvStoreAdapter } from 'keyv';

const debug = createDebug('auth:session');

type Options = {
  cookie: any;
  adaptor: string;
  defaultTTL: number;
  nameSpace: string;
};

/**
 * Create a external session store.
 * @param param0
 * @returns
 */
export function createExternalSessionStorage(options: Options) {
  let keyvAdaptor: KeyvStoreAdapter | null = null;
  debug('Setup session store with', options);
  if (options.adaptor.includes('sqlite')) {
    keyvAdaptor = new KeyvSqlite(options.adaptor);
  } else if (options.adaptor.includes('redis')) {
    keyvAdaptor = new KeyvRedis(options.adaptor);
  } else {
    throw new Error(`Unsupported KeyvStore: ${options.adaptor}`);
  }
  const keyv = new Keyv({
    store: keyvAdaptor,
    ttl: options.defaultTTL,
    namespace: options.nameSpace || 'session-store',
  });
  return createSessionStorage({
    cookie: options.cookie,
    async createData(data, expires) {
      const sessionId = crypto.randomBytes(32).toString('hex');
      debug('createData', data, expires);
      await keyv.set(sessionId, data);
      return sessionId;
    },
    async readData(id) {
      const data = await keyv.get<any>(id);
      debug('readData', id, data);
      return data;
    },
    async updateData(id, data, expires) {
      debug('updateData', id, data, expires);
      await keyv.set(id, data);
    },
    async deleteData(id) {
      debug('deleteData', id);
      await keyv.delete(id);
    },
  });
}
