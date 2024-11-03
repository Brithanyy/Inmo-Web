import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../Models/Review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  peticionesHTTP = inject(HttpClient);
  urlBase = 'http://localhost:3000/Review';

  getReviews(): Observable<Review[]> {
    return this.peticionesHTTP.get<Review[]>(this.urlBase);
  }

  getReviewsByPropertyID(type: string | null, id: string | null): Observable<Review[]> {
    return this.peticionesHTTP.get<Review[]>(this.urlBase + "/" + id);
  }

  addReview(review: Review): Observable<Review> {
    return this.peticionesHTTP.post<Review>(this.urlBase, review);
  }

  deleteReview(idReview : string | undefined): Observable<void> {
    return this.peticionesHTTP.delete<void>(this.urlBase + "/" + idReview);
  }
}
