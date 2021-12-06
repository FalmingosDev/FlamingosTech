import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "https://flamingostech.com/flamingostech_handler"; //in root
  // baseUrl:string = "https://flamingostech.com/DEV/flamingostech/flamingostech_handler"; //in DEV

  constructor(private httpClient : HttpClient) { }
  onRequestdemoSubmit(form){
    return this.httpClient.post<any>(this.baseUrl + '/request_demo.php', form);
  }

  fetch_req_demo(){
    return this.httpClient.get<any>(this.baseUrl+ '/fetch_request_demo.php'); 
  }

  postApplyForm(name,phone,email,applyfor,experience,message,image){
    const applyformData: FormData = new FormData();
    applyformData.append('name',name);
    applyformData.append('phone',phone);
    applyformData.append('email',email);
    applyformData.append('applyfor',applyfor);
    applyformData.append('experience',experience);
    applyformData.append('message',message);
    applyformData.append('img',image);
    return this.httpClient.post<any>(this.baseUrl+'/applyform_submit.php',applyformData);
  }
}