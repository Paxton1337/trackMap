import { Component, OnInit, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TruckControlService } from '../../services/truck-control-serice/truck-control.service';

@Component({
  templateUrl: './delete-truck-modal.component.html',
  styleUrls: ['./delete-truck-modal.component.scss']
})
export class DeleteTruckModalComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private controlTruck: TruckControlService) { }

  ngOnInit(): void { }

  removeTruck(): void {
    this.controlTruck.removeTruck(this.data.truck);
  }

}
