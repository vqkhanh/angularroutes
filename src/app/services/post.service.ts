import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PostService extends DataService {

  constructor(httpClient: HttpClient) {
    super('https://random-data-api.com/api/restaurant/random_restaurant', httpClient);
   }

  
}
