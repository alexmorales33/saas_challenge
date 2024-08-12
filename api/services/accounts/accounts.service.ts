import { accountsClient } from '@/api/clients/accounts/accounts.client';
import { Account } from '@/src/types';

const getAccounts = async (): Promise<Account[]> => {
  try {
    const accountsData = await accountsClient.getAccounts();
    return accountsData;
  } catch (error) {
    throw new Error('Failed to process accounts data');
  }
}

export const accountsService = {
  getAccounts,
};
