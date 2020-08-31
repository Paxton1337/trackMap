import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Truck } from '../models/truck';
import { AddTruckModalComponent } from '../components/add-truck-modal/add-truck-modal.component';
import { TruckControlService } from '../services/truck-control-serice/truck-control.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  trucks: Truck[];

  curTruck: Truck;

  saveTrucks: Truck[];
  filterName: any;

  constructor(public dialog: MatDialog, private truckControl: TruckControlService) { }

  ngOnInit(): void {
    this.truckControl.getAllTrucks().subscribe(trucks => {
      this.saveTrucks = trucks;
      return this.trucks = trucks;
    });
    this.curTruck = this.trucks[Math.round(Math.random() * 3)];
  }

  openAddDialog(): void {
    this.dialog.open(AddTruckModalComponent, {});
  }

  displayCounter(): void {
    this.truckControl.getAllTrucks().subscribe(trucks => {
      this.curTruck = trucks[0];
      return this.trucks = trucks;
    });
  }

  changePos(truck$: Truck): Truck {
    return this.curTruck = truck$;
  }

  filterTruck(): void {
    this.trucks = this.saveTrucks;
    const sliceEnd = this.filterName.length;
    this.trucks = this.trucks.filter(truck => {
      const filter = truck.name.slice(0, sliceEnd);
      return this.filterName === filter ? true : false ;
    });
  }
}
