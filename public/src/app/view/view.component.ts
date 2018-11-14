import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  restaurant: any;
  restaurantId: Number;
  reviews: [];
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.restaurant = {};
    this.reviews = [];
    this._route.params.subscribe((params: Params) => {
        this.restaurantId = params['id'];
        this.getRestaurant(this.restaurantId);
    });
  }


  getRestaurant(id) {
    let observable = this._httpService.getRestaurantById(id);
    observable.subscribe(data => { 
      console.log(data);
      this.restaurant = data;
      this.reviews = data['reviews'];
      this.reviews.sort(function(a, b) { 
        return b['rating'] - a['rating'];
    });
    }); 
  }
}
