import { Injectable } from '@angular/core';
import {  EMPTY, Observable, catchError } from 'rxjs';
import { MainRequestServiceService } from './main-request-service.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private mainRequestService: MainRequestServiceService,
    private toastr: ToastrService,
  ) { }

  sentMessage(message:string): Observable<any> {
    console.log('message: ', message);
    const payload = { message: message };
    const url = 'http://localhost:3000/api/message/create';
    return this.mainRequestService.addData(url, payload);
  }



} 
