import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TruckControlService } from '../../services/truck-control-serice/truck-control.service';

@Component({
  selector: 'app-add-truck-modal',
  templateUrl: './add-truck-modal.component.html',
  styleUrls: ['./add-truck-modal.component.scss']
})
export class AddTruckModalComponent implements OnInit {

  TruckForm: FormGroup = this.fb.group({
    name: ['', [Validators.pattern('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$'), Validators.required]],
    lat: ['', [Validators.pattern('^(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$'), Validators.required]],
    lng: ['', [Validators.pattern('^(\-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$'), Validators.required]]
  });

  constructor(private fb: FormBuilder, private truckControl: TruckControlService) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.truckControl.addTruck(this.TruckForm.value);
  }
}
