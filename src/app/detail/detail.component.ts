import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit
{
  pizza: Pizza
  constructor(private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private location: Location){ }

  ngOnInit() {
    this.getPizza();
  }
  getPizza(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
      .subscribe(pizza => this.pizza = pizza);
  }

  goBack(): void
  {
    this.location.back();
  }

}
