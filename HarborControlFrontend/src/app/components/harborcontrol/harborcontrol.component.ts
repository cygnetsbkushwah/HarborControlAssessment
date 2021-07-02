//#region Angular Imports
import { Component, OnInit } from '@angular/core';
//#endregion

//#region service Imports
import { WindService } from 'src/app/services/wind.service';
import { BoatService } from 'src/app/services/boat.service';
//#endregion

//#region model Imports
import { BoatModel } from 'src/app/model/boat-model';
import { BoatTypes, BoatStatus } from 'src/app/model/boat-types-enum';
//#endregion

@Component({
  selector: 'app-harborcontrol',
  templateUrl: './harborcontrol.component.html',
  styleUrls: ['./harborcontrol.component.scss']
})
export class HarborControlComponent implements OnInit {

  //#region Public Variables
  windSpeed: number = 0;
  boatCount: number;
  boatList: BoatModel[] = [];
  speedBoatcount = 0;
  sailBoatcount = 0;
  cargoBoatcount = 0;
  autoRefWindTimeLeft: number = 60;
  interval: any;
  //#endregion

  //#region  Constructor
  constructor(
    private windService: WindService,
    private boatService: BoatService
  ) { }
  //#endregion

  //#region  Angular Events
  ngOnInit() {
    this.getWindSpeed();
  }

  setAutoRefreshWindSpeed() {
    this.interval = setInterval(() => {
      if (this.autoRefWindTimeLeft > 1) {
        this.autoRefWindTimeLeft--;
      } else {
        this.getWindSpeed();
      }
    }, 1000)
  }
  //#endregion

  // Get wind speed using open weather api
  getWindSpeed() {
    clearInterval(this.interval);
    this.autoRefWindTimeLeft = 60;
    this.windService.getWindDetails().subscribe(res => {
      if(this.windSpeed !== +parseFloat(String((res['wind']['speed'] * 18) / 5)).toFixed(2)){
        if(this.boatList.filter(x=> x.boatStatus === BoatStatus.CannotProcess).length > 0
        && this.boatList.filter(x=> x.boatStatus !== BoatStatus.InQueue).length > 0){
          this.processBoats();
        }
      }
      this.windSpeed = +parseFloat(String((res['wind']['speed'] * 18) / 5)).toFixed(2);
      this.setAutoRefreshWindSpeed();
    }, error => {
      alert('Error while getting the wind speed.');
    });
  }

  // Refresh wind speed
  windSpeeRrefresh() {
    this.getWindSpeed();
  }
  //#endregion

  //#region public methods
  // Generate random boats
  generateBoat() {
    if (+this.boatCount > 0 && +this.boatCount < 31) {
      this.boatService.generateRandomBoats(this.boatCount).subscribe(res => {
        this.boatList = this.boatList.concat(res);
        this.boatCount = undefined;
        this.pendingBoatCount();
        if (!this.boatList.some(x => x.boatStatus === BoatStatus.InProgress)) {
          this.processBoats();
        }
      }, (error => {
        alert('Error while generating the boats');
      }));
    } else {
      alert('Please Enter a number between 1 to 30.')
    }
  }

  // getting boat status
  getBoatStatus(status: BoatStatus) {
    switch (status) {
      case BoatStatus.InProgress:
        return 'In Progress';
      case BoatStatus.InQueue:
        return 'In Queue';
      case BoatStatus.Completed:
        return 'Completed';
      case BoatStatus.CannotProcess:
        return 'Boat can not enter in perimeter.';
    }
  }

  // Getting boat type
  getBoatType(boatType: BoatTypes) {
    switch (boatType) {
      case BoatTypes.SpeedBoat:
        return 'Speedboat';
      case BoatTypes.SailBoat:
        return 'Sailboat';
      case BoatTypes.CargoShip:
        return 'Cargo Ship';
    }
  }

  //#region Private Methods
  // Method which allow boats to enter in perimeter
  private processBoats() {
    let boat = this.boatList.find(x => x.boatStatus === BoatStatus.InQueue);
    if (boat.boatType === BoatTypes.SailBoat && (this.windSpeed < 10 || this.windSpeed > 30)) {
      setTimeout(() => {
        boat.boatStatus = BoatStatus.CannotProcess;
        this.processBoats();
      }, 1000);
    } else {
      boat.boatStatus = BoatStatus.InProgress;
      setTimeout(() => {
        boat.boatStatus = BoatStatus.Completed;
        this.pendingBoatCount();
        if (this.boatList.some(x => x.boatStatus === BoatStatus.InQueue)) {
          this.processBoats();
        }
      }, boat.duration * 1000);
    }
  }

  // Method which get pending boat count
  private pendingBoatCount() {
    this.speedBoatcount = this.boatList.filter(x => x.boatType === BoatTypes.SpeedBoat && x.boatStatus !== BoatStatus.Completed).length;
    this.sailBoatcount = this.boatList.filter(x => x.boatType === BoatTypes.SailBoat && x.boatStatus !== BoatStatus.Completed).length;
    this.cargoBoatcount = this.boatList.filter(x => x.boatType === BoatTypes.CargoShip && x.boatStatus !== BoatStatus.Completed).length;
  }
  //#endregion



}
