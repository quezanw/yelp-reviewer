import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @Input() restaurant: any;
    @Output() aTaskEventEmitter = new EventEmitter();
    error: any;
    success: String;
    edit_r: any;
  constructor(private _httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.edit_r = this.restaurant;
  }

  triggerEvent() {
    //  2b. Emit the Event
    this.aTaskEventEmitter.emit(false); //we can pass in any data type
  }

  editRestaurant() {
    let observable = this._httpService.editRestaurant(this.edit_r, this.restaurant._id);
    observable.subscribe(data => {
      console.log(data);
      this.error = [];
      if (data['errors']) {
        for (let err in data['errors']) {
          this.error.push(data['errors'][err]['message']);
        }
        this.success = "";
      } else {
        this.triggerEvent();
      }
    });
  }

}
