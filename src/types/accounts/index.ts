export interface Account {
    id: string;
    name: string;
    displayName: string;
    deleted?: boolean;
  }
  
export interface AccountsState {
    accounts: Account[];
    loading: boolean;
    error: string | null;
}