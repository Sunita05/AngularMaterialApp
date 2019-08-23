import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { user } from '../user';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-displaydemo',
  templateUrl: './displaydemo.component.html',
  styleUrls: ['./displaydemo.component.css']
})
export class DisplaydemoComponent implements OnInit {
  displayedColumns: string[] = ['user_email', 'user_name', 'user_mobile_no', 'user_password'];
  // dataSource: user[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  datasource:MatTableDataSource<user>
  selection: any;
  constructor(private _data:DataService) { }


  ngOnInit() {
    this._data.getAllUsers().subscribe((data:user[])=>{
      this.datasource=new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;

    }

    );

  }
  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: URL): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}




