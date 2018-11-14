import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    restaurants: any;
    selected: any;
    showEdit: Boolean;
    constructor(private _httpService: HttpService) { }
    dataFromChild(eventData) {
      this.showEdit = eventData;
      console.log(eventData);
    }
    ngOnInit() {
      this.getRestaurants();
      this.showEdit = false;
    }
  
    getRestaurants() {
        let observable = this._httpService.getRestaurants();
        observable.subscribe(restaurants => {
            console.log(restaurants);
            this.restaurants = restaurants;
        })
    }

    showRestaurantToEdit(restaurant) {
        this.selected = restaurant;
        this.showEdit = true;
        // console.log(this.selected);
    }
  
    deleteRestaurant(id) {
      if(confirm("Are you sure you want to delete this restaurant?")) {
          let observable = this._httpService.deleteRestaurant(id);
          observable.subscribe(result => {
              console.log(result);
              this.getRestaurants();
          })   
      }
    }

}
