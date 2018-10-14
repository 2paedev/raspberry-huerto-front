import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/common/domain/api/test.service';
import { SYMBOLS } from 'src/app/common/domain/constants';
import { interval } from 'rxjs/internal/observable/interval';
import { INTERVAL_TIME_REQUESTS } from 'src/app/common/helpers/config-requests';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TestService],
})
export class HomeComponent implements OnInit {
  symbols = SYMBOLS;
  constructor(private testApi: TestService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    interval(INTERVAL_TIME_REQUESTS).subscribe((val) => {
      this.getAllCardInfo();
    });
  }

  getAllCardInfo() {
    const queryParams = {
      testParam: '1234',
    };
    this.testApi.getTest(queryParams).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
