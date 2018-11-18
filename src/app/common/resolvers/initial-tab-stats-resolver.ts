import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";

import { Observable } from "rxjs";
import { StatsTabs } from "../services/stats-tabs.service";

@Injectable()
export class InitialTabStatsResolver implements Resolve<Observable<string>> {
  constructor(private statsTabs: StatsTabs) {}

  resolve() {
    return this.statsTabs.current;
  }
}
