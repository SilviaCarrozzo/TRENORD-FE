import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export default class CheckListService {
  baseUrl = environment.backendUrl;

  constructor( private http: HttpClient) {}

  getCheckList() {
    return this.http.get( this.baseUrl + 'facts')
  }

  getFact() {
    return this.http.get( this.baseUrl + 'fact')
  }

}
