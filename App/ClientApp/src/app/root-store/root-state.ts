import { AuthState } from './auth-store/state';

export interface State {
    count: number;
    auth: AuthState;
}
