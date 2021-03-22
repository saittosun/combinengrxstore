import { Lead } from './../../../types/lead';
import { LeadService } from './../../services/lead.service';
import { LeadFacade } from './../../services/lead.facade';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsOverviewPageComponent implements OnInit {
  private destroyed$ = new Subject<boolean>();
  leads: Lead[];
  filteredLeads: Lead[];

  constructor(private store: LeadFacade,
              private leadService: LeadService) { }

  ngOnInit(): void {
    this.store.getLeads().subscribe(leads => {
      console.log(leads);
    })
  }

}
