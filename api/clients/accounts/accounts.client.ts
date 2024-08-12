import { FEED_API } from '@/config/env';
import axios from 'axios';
import { Account } from '@/src/types';

const getAccounts = async (): Promise<Account[]> => {
  try {
    const response = await axios.get<{ data: Account[] }>(`${FEED_API}/accounts.json`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch accounts');
  }
}

export const accountsClient = {
  getAccounts,
};
