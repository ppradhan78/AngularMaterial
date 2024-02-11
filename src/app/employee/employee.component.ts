import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../common/commonServices/logger.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
  //,providers: [LoggerService]
})
export class EmployeeComponent implements OnInit {

  constructor(private logger: LoggerService) {
    this.logger.getRandomValue();
  }

  ngOnInit(): void {
  }

}
