import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class StockService {

  constructor(public httpClient:HttpClient) {
  }


  getStocks(): Observable<Stock[]> {
     return this.httpClient.get<Stock[]>('/api/stock');
  }

  getStock(id: number): Observable<Stock> {
    return this.httpClient.get<Stock>('/api/stock/'+id);
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
