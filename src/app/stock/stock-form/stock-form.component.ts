import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from '../../../../node_modules/rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  formModel: FormGroup;
  stock: Observable<Stock>;
  categories=["IT","互联网","金融"];

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {
  }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
    /*let fb=new FormBuilder();
    this.formModel=fb.group({
      name:[this.stock.name,[Validators.required,Validators]]
    })*/
  }

  cancel() {
    this.router.navigateByUrl('/stock');

  }

  save() {
    this.router.navigateByUrl('/stock');
  }

}
