import { Injectable } from "@angular/core";

@Injectable()
export class StatsTabs {
  public current;

  constructor() {}

  setDefaultTabsConfig() {
    this.current = 0;
  }
}
