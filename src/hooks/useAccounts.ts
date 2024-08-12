import { useEffect, useState } from "react";
import { accountsController } from "@/src/controllers/accounts";
import { Account } from "@/src/types";

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await accountsController.getAccountsList();
        setAccounts(data);
      } catch (err) {
        setError('Failed to fetch accounts');
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  return { accounts, loading, error };
};
