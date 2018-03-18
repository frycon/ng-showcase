import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Showcase';
  twoWayGettersAndSettersInternal = 'automatic two way data binding';
  manualTwoWayGettersAndSettersInternal = 'manual two way data binding';
  propertyBindingInternal = 'property binding';

  get twoWayGettersAndSetters(): string {
    console.log('Getter for twoWayGettersAndSetters called. Value is [' + this.twoWayGettersAndSettersInternal + ']');
    return this.twoWayGettersAndSettersInternal;
  }

  set twoWayGettersAndSetters(value: string) {
    console.log('Setter for twoWayGettersAndSetters called. new value is [' + value + '], old value was [' + this.twoWayGettersAndSettersInternal + ']');
    this.twoWayGettersAndSettersInternal = value;
  }

  get manualTwoWayGettersAndSetters(): string {
    console.log('Getter for manualTwoWayGettersAndSetters called. Value is [' + this.manualTwoWayGettersAndSettersInternal + ']');
    return this.manualTwoWayGettersAndSettersInternal;
  }

  set manualTwoWayGettersAndSetters(value: string) {
    console.log('Setter for manualTwoWayGettersAndSetters called. new value is [' + value + '], old value was [' + this.manualTwoWayGettersAndSettersInternal + ']');
    this.manualTwoWayGettersAndSettersInternal = value;
  }

  propertyBindingRead(): string {
    console.log('propertyBindingRead called. Value is [' + this.propertyBindingInternal + ']');
    return this.propertyBindingInternal;
  }

  propertyBindingWrite(event: any) {
    console.log('propertyBindingWrite called. New value is [' + event.target.value + '], old value was [' + this.propertyBindingInternal + ']');
    console.log(event);
    this.propertyBindingInternal = event.target.value;
  }
}
