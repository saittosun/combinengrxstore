import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { Lead } from './../../types/lead';
import { AppLeadState } from "../store/lead.types";
// import { setLeads } from '../store/lead.actions';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class LeadFacade {
  constructor(private store: Store<AppLeadState>) {}

  // public setLeads(leads: Lead[]) {
  //   this.store.dispatch(setLeads({leads: leads}));
  // }

  public getLeads() {
    return this.store.select('leads').pipe(map(state => state.projects));
  }
}
