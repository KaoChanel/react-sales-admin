export interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    currentUser: any;
  }