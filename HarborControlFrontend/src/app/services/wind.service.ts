import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WindService {

  //#region environment Variable

  private externalApiURL = environment.windServiceBaseURL;

  //#endregion

  //#region  Constructor

  constructor(private http: HttpClient) {
  }

  //#endregion


  // Service to get wind information 
  public getWindDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.externalApiURL);
  }
}
