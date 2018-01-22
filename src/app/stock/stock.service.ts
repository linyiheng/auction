import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


@Injectable()
export class StockService {

  constructor(public http:HttpClientModule) {
  }


  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    //为何三个等于号不可行
    let stock: Stock = this.stocks.find(stock => stock.id == id);
    if(!stock){
      stock=new Stock(0, '', 0, 0, '', []);
    }
    return stock;
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
