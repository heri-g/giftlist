import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private http: HttpClient) { }

  getTraits() {
    return this.http.get('https://s3.amazonaws.com/gifts-keywords/traits.json');
    // return this.http.get('./assets/trats.json');
  }

}
