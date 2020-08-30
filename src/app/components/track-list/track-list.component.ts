import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Truck } from '../../models/truck';
import { DeleteTruckModalComponent } from '../delete-truck-modal/delete-truck-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @Input() truck: Truck;
  @Input() curTruck: Truck;

  @Output() valueChange = new EventEmitter();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openRemoveDialog(truck$: Truck): void {
    this.dialog.open(DeleteTruckModalComponent, {
      data: { truck: truck$ }
    }).afterClosed().subscribe(result => this.valueChange.emit(this.truck));
  }

}
