import { Component } from '@angular/core';
import { LoggerService } from './common/commonServices/logger.service';
import { printLog } from './decorators/logdecorator';
import { HomeAutomationFacade } from './FacadePattern/HomeAutomationFacade';
import { LightSystemOne } from './FacadePattern/LightSystemOne';
import { SecuritySystemOne } from './FacadePattern/SecuritySystemOne';
import { ProductFactory  } from './FactoryPattern/ProductFactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '|| Latest angular learning ||';

  constructor(private logger: LoggerService) {
    this.getRandomValue();
    const product = ProductFactory.createProduct("car");

    console.log(product.name); // "Car"
    console.log(product.price); // 10000


    const myLightSystem = new LightSystemOne();
    const mySecuritySystem = new SecuritySystemOne();
    const myHomeAutomation = new HomeAutomationFacade(myLightSystem, mySecuritySystem);

    myHomeAutomation.goodMorning();
    myHomeAutomation.goodNight(); 
  }
  @printLog('Function Returned:')
  getRandomValue() {
    let val = Math.random() * 10;
    console.log(val);
    return Math.random() * 10;
  }
}
