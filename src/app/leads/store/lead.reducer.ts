import { Action, createReducer, on } from '@ngrx/store';

import { LeadListState } from "./lead.types";
import { getLeads, getLeadsSuccess, getLeadsFailed } from './lead.actions';
import { Lead } from '~types/lead';

export const LEAD_INITIAL_STATE: LeadListState = {
  projects: [
    {
      id: "2718d62c-f21d-493c-8717-cfe979927cbb",
      name: "Mijn Tijden",
      reference: "A001144",
      status: "won",
      pitchDate: "2018-12-16T14:00:000Z",
      offerDate: "2019-01-07T08:00:000Z",
      offerPresentationDate: "2019-01-10T10:00:000Z",
      customer: "54bd4e53-029d-4743-831a-35efc0e003f4",
      description: "Short description field \nmulti line text",
      notes: "Notes field for further notes between people working on it"
    }
  ],
  loading: false,
  error: null
};

export const leadReducer = createReducer(
  LEAD_INITIAL_STATE as any,
  on(
    getLeadsSuccess,
    (state: LeadListState) => ({
      ...state
    })
  )as any,
  on(
    getLeadsFailed,
    (state: LeadListState, { error }: any) => ({
      ...state,
      loading: false,
      error
    })
  ) as any,
  // on(
  //   setLeads,
  //   (state: LeadListState, { leads }: {leads: Lead[]}) => ({
  //     ...state,
  //     projects: leads,
  //     loading: false,
  //     error: null
  //   })
  // ) as any,
)

function leadReducerWrapper(state: LeadListState, action: Action) {
  return leadReducer(state, action)
}

export const leadReducers: any = {
  listLead: leadReducerWrapper
}
