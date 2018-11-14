import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    new_restaurant: any;
    error: any;
    success: String;
    constructor(private _httpService: HttpService, 
        private router: Router) {}
  
    ngOnInit() {
      this.new_restaurant = {};
      this.error = [];
    }
  
    submitRestaurant() {
      let observable = this._httpService.createRestaurant(this.new_restaurant);
      observable.subscribe(data => {
        console.log(data);
        this.error = [];
        if (data['errors']) {
          for (let err in data['errors']) {
            this.error.push(data['errors'][err]['message']);
          }
          this.success = "";
        } else if (data['driver']) {
          this.error.push("Restaurant already registered.")
        } else {
            this.router.navigate(['']);
        }
      });
    }

}
