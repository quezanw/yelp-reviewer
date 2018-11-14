import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants() {
    return this._http.get('/api');
  }

  getRestaurantById(id) {
    return this._http.get('/api/' + id );
  }

  createRestaurant(restaurant) {
    return this._http.post('/api', restaurant);
  }

  editRestaurant(restaurant, id) {
    return this._http.put('/api/' + id, restaurant);
  }

  addReview(review, id) {
    return this._http.put('/api/review/' + id, review);
  }

  deleteRestaurant(id) {
    return this._http.delete('/api/' + id);
  }
  
}
