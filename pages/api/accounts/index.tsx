import { accountsService } from '@/api/services/accounts/accounts.service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const data = await accountsService.getAccounts();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
