import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsComponent } from "./stats.component";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";
import { StatsModule } from "./stats.module";

describe("StatsComponent", () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, StatsModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be create the StatsComponent", () => {
    expect(component).toBeTruthy();
  });
});
