import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  form: FormGroup;
  id:any;
  event:any={};
   actionType:any;
   eventDatevalue:Date;
  constructor(
    public eventService: EventService,
    private router: Router,
    private route:ActivatedRoute,
    private _snackBar: MatSnackBar,
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['eventId'];
    this.actionType = this.route.snapshot.queryParams.type;
    if(this.id){
    this.eventService.find(this.id).subscribe((data)=>{
      this.event = data;
    });
  }
    // this.event ={"websiteName":"abc", "title":'somessd', "eventDate": "2019/08/01" , 'location':'San Francisco, CA'}
    this.form = new FormGroup({
      websiteName: new FormControl('', [Validators.required]),
      title: new FormControl('', Validators.required),
      eventDate: new FormControl('', [Validators.required]),
      location: new FormControl('', Validators.required),
    });
    if(this.id){
      // this.form.patchValue(this.event)
      // this.eventDatevalue = new Date();
      setTimeout(()=>{
      this.eventDatevalue = new Date(this.event.startDate);
      this.form.get('websiteName').setValue(this.event.applicationName);
      this.form.get('title').setValue(this.event.event);
      this.form.get('eventDate').setValue(this.event.startDate);
      this.form.get('location').setValue(this.event.location);
    },500)
    }
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    const msg = this.id ? 'Event Edited Succesfully':'Event Created Succesfully';
    
    if(this.actionType == 'edit'){
     const obj={
      "event":this.form.get('title').value,
      "startDate":this.form.get('eventDate').value,
      "applicationName": this.form.get('websiteName').value,
      "location": this.form.get('location').value
     }
    this.eventService.update(this.id,obj).subscribe(res => {
   // })
      this._snackBar.open(msg,'',{
        duration:5000,
        panelClass: ["custom-style-add"]
      });
      this.router.navigateByUrl('event/index');
 })
   }
  }
}


