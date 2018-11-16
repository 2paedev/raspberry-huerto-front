import { Component, Input, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { TEXTS } from "../../domain/texts";
import { SpinnerService } from "../../services/spinner.service";

@Component({
  selector: "app-loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"]
})
export class LoadingSpinnerComponent implements OnInit {
  @Input()
  show: boolean;

  LOADING_TEXT: string;

  constructor(
    private spinner: NgxSpinnerService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.LOADING_TEXT = TEXTS.LOADINGS_TEXTS.SPINNER;
    this.spinnerService.getData().subscribe(data => {
      if (data) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
