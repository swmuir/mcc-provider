import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import moment from 'moment';

@Component({
  selector: 'app-inactive-diagnosis-panel',
  templateUrl: './inactive-diagnosis-panel.component.html',
  styleUrls: ['./inactive-diagnosis-panel.component.css']
})
export class InactiveDiagnosisPanelComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['code', 'firstOnset', 'firstRecorded'];
  dataSource: MatTableDataSource<any>;
  showFilter: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dataservice: DataService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataservice.conditions.inactiveConditions);
    this.dataSource.sortingDataAccessor = (item, property): string | number => {
      switch (property) {
        case "firstRecorded": return moment(item[property]).isValid() ? moment(item[property]).unix() : item[property];
        case 'firstOnset': return moment(item[property]).isValid() ? moment(item[property]).unix() : item[property];
        case 'code': return item[property].text.toUpperCase();
        default: return item[property];
      }
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
