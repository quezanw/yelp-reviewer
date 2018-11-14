import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
    restaurant: any;
    restaurantId: Number;
    new_review: any;
    error: any;
    success: String;
    constructor(private _httpService: HttpService,
      private _route: ActivatedRoute,
      private router: Router) {}

    ngOnInit() {
      this.new_review = {};
      this.restaurant = {};
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
      });
    }

    submitReview() {
      let observable = this._httpService.addReview(this.new_review, this.restaurantId);
      observable.subscribe(data => {
        this.error = [];
        if (data['errors']) {
            console.log(data['errors']['reviews']['errors'])
          for (let err in data['errors']['reviews']['errors']) {
            this.error.push(data['errors']['reviews']['errors'][err]['message']);
          }
          this.success = "";
        } else {
          this.success = "Review Created."
          this.router.navigate(['/', 'restaurants', this.restaurantId]);
        }
      });
    }

}
