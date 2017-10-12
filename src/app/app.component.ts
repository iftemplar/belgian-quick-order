import { Component } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Belgian Village quick order';
  showThePrice = 0;
 
  onSwitcherClick(){
    var currentPrice = $(event.target).parents(".switch-wrapper").prev(".price").toggleClass("active");

    var el = $('.price.active');
    var elPrice = 0;

    $(el).each(function () {
      elPrice += +($(this).text().replace(/\D/g,''));
    });

    this.showThePrice = elPrice;
  };
  
}
