import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';
import { ITable } from './report-model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  table = [] as ITable[];
  tempData = [] as ITable[];
  searchKey!: string;



  constructor(private _http: HttpService, private _dataShare: DataService) { }

  ngOnInit(): void {
    this.loadTable();

    this._dataShare.searchKey.subscribe({
      next: key => {
        this.searchKey = key;
        this.filterTable(this.searchKey);
      }
    });
  }


  pushSearchKey() {
    this._dataShare.searchKey.next(this.searchKey);
  }

  filterTable(key: string) {
    this.table = this.table.filter((a) => {
      if (a.role.indexOf(key) != -1)
        return a;
      else
        return null;
    });
  }

  loadTable() {
    this.subscription = this._http.getData("/table").subscribe({
      next: data => {
        this.table = data as ITable[];
        this.table = this.table;
      },
      error: err => console.log(err),
      complete: () => console.log("Completed")
    });
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }


}
