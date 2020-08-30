import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Truck } from '../../models/truck';
import { Trucks } from '../../models/trucks';

@Injectable({
  providedIn: 'root'
})
export class TruckControlService {

  trucks = Trucks;

  constructor() { }

  getAllTrucks(): Observable<Truck[]> {
    return of(this.trucks);
  }

  addTruck(truck$: Truck): void {
    this.trucks.push(truck$);
    console.log(this.trucks);
  }

  removeTruck(truck$: Truck): void {
    this.trucks = this.trucks.filter(truck => truck.name !== truck$.name);
  }
}
