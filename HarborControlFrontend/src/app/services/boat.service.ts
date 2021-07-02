import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BoatModel } from '../model/boat-model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

 //#region environment Variable
 private apiURL = environment.baseURL;
 //#endregion

 //#region  Constructor
 constructor(private http: HttpClient) { 
 }
 //#endregion

 //Service to generate number of random boats and get fetch it
 public generateRandomBoats(boatCount: number): Observable<BoatModel[]> {
   return this.http.get<BoatModel[]>(`${this.apiURL}/Boat/GetRandomBoats/${boatCount}`);
 }
}
