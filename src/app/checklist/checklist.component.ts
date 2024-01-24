import { Component, OnInit, ViewChild } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { environment } from 'src/environments/environment.development';
import CheckListService from '../_services/checkList.service';
import { ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatPaginator, CommonModule, MatCommonModule, MatPaginatorModule, RouterModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent implements OnInit {
  displayedColumns: string[] = ['index', 'todo_list', 'screw', 'fact', 'associate_key', 'details'];
  selection = new SelectionModel<any>(true, []);
  resultsLength: any;
  checkList: any = [];
  imageSource = environment.imageSource;
  dataSource = new MatTableDataSource<any>;//(this.checkList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private checkListService: CheckListService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.checkListService.getCheckList()
      .subscribe( (response: any) => {
            this.checkList = response.data;
            this.dataSource = new MatTableDataSource<any>(response.data);
            this.dataSource.paginator = this.paginator;
            console.log("checkList: ", this.checkList);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
