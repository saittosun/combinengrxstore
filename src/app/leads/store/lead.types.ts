import { Lead } from '~types/lead';
import { LeadActions } from './lead.actions';

export interface LeadListState {
  projects: Lead[];
  loading: boolean;
  error: string;
}

export interface LeadsState {
  list: LeadListState;
}

export interface AppState {
  leads: LeadsState;
}

export interface LeadAction {
  type: keyof typeof LeadActions;
  projects?: Lead[];
  error?: string;
  loading?: boolean;
}
