import { BoatStatus, BoatTypes } from "./boat-types-enum";


export class BoatModel {
    boatId: number = 0;
    boatType: BoatTypes = 0;
    boatSpeed: number = 0;
    duration: number = 0;
    boatStatus: BoatStatus = 0;
}
