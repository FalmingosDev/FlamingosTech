import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "https://flamingostech.com/flamingostech_handler";

  constructor(private httpClient : HttpClient) { }
  onRequestdemoSubmit(form){
    return this.httpClient.post<any>(this.baseUrl + '/request_demo.php', form);
  }

  fetch_req_demo(){
    return this.httpClient.get<any>(this.baseUrl+ '/fetch_request_demo.php'); 
  }
}