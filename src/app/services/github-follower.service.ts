import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GithubFollowerService extends DataService {

  constructor(httpClient: HttpClient) { 
    super('https://api.github.com/users/mosh-hamedani/followers', httpClient);
  }
}
