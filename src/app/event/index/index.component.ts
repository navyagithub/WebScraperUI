import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EventService } from '../event.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild("sort1") sort1: MatSort;
  dataSourceList = new MatTableDataSource<any>([]);
  dataSourceListDummy=[];
  displayedColumns=['websiteName','title','eventDate','Location','Actions']
// @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(private _snackBar: MatSnackBar,private eventService:EventService) { }

  ngOnInit(): void {
      this.eventService.getAll().subscribe(res=>{
       this.dataSourceList = new MatTableDataSource<any>(res);
  
     })
    // this.dataSourceList = new MatTableDataSource<any>([{"websiteName":"abc", "title":'San Francisco', "eventDate": "20-09-2022" , 'Location':'San Francisco, CA'},
    // {"websiteName":"abc1", "title":'Austin', "eventDate": "21-09-2022" , 'Location':'Austin, TX'},
    // {"websiteName":"abc2", "title":'Orlando', "eventDate": "22-09-2022" , 'Location':'Orlando, FL'},
    // {"websiteName":"abc3", "title":'Online', "eventDate": "23-09-2022" , 'Location':'Online, Virtual'}])
  }
  ngAfterViewInit() {
    this.dataSourceList.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceList.filter = filterValue.trim().toLowerCase();
  }
  deletePost(event:any){
      this.dataSourceListDummy = this.dataSourceList.filteredData;
      this.eventService.delete(event).subscribe(res => {
        this.dataSourceList=new MatTableDataSource<any>(this.dataSourceListDummy.filter(el=> el.id !== event));
    
        this._snackBar.open('Event Deleted','',{
          duration:5000,
          panelClass: ["custom-style-delete"]
        });
  })
 }
}
