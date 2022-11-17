import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey!: string;

  constructor(private _dataShare: DataService) { }

  ngOnInit(): void {
  }

  pushSearchKey() {
    this._dataShare.searchKey.next(this.searchKey);
  }
}