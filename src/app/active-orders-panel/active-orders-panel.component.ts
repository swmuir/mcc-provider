import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MccServiceRequestSummary } from 'e-care-common-data-services/build/main/types/mcc-types';
import moment from 'moment';
import { Constants } from '../common/constants';
import {  SocialConcern } from '../generated-data-api';

import { DataService } from '../services/data.service';

declare var window: any;

@Component({
  selector: 'app-active-orders-panel',
  templateUrl: './active-orders-panel.component.html',
  styleUrls: ['./active-orders-panel.component.css']
})
export class ActiveOrdersPanelComponent implements OnInit {
  activeOrders: MatTableDataSource<MccServiceRequestSummary>;
  displayedColumns = ['topic', 'displayDate', 'performer', 'reasons','source'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.activeOrders = new MatTableDataSource(this.dataService.servicerequest);
    this.activeOrders.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case 'topic': return item[property].text;
        case 'displayDate': return moment(item[property]).unix();
        case 'outcome': return item[property].text;
        default: return item[property];
      }
    };
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
}
