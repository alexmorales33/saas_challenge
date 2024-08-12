import axios from 'axios';
import { Account } from '@/src/types';

const getAccountsList = async (): Promise<Account[]> => {
  const response = await axios.get<Account[]>('/api/accounts');
  return response.data;
}

export const accountsController = {
  getAccountsList,
};
