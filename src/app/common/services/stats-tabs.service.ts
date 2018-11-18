import { Injectable } from "@angular/core";

@Injectable()
export class StatsTabs {
  public current: any;

  constructor() {}

  setDefaultTabsConfig() {
    this.current = 0;
  }
}
