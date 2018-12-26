import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
import { PayPalConfig, PayPalIntegrationType, PayPalEnvironment } from 'ngx-paypal';
import { OrderService } from '../REST';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pizza: Pizza;
  public payPalConfig?: PayPalConfig;

  constructor(private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private orderService: OrderService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id).subscribe(pizza => {
      this.pizza = pizza
      this.initConfig(pizza)
    });
  }

  private initConfig(pizza: Pizza): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AZqhpJWza1_BH1oW4UhtyA4MWiqBrvBiAgpinPgnPph-NehWMJN6iQ3kL4EPS2oRGFWWpJdm7R_TlEql'
      },
      button: {
        label: 'checkout',
      },
      onPaymentComplete: (data, actions) => {
        console.log(data, actions);

        //this.orderService.orderPizza({name:})
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{

        amount: {
          currency: 'EUR',
          total: pizza.price
        }
      }]
    });
  }

}
