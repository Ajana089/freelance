import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
 import { Observable } from 'rxjs';
 import {APIResponse} from '../../../../app/cores/models/interface/master'
import { environment } from '../../../../environments/environment.development';
import { Constant } from '../../constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}


    getAllusers():Observable<APIResponse>
    {
      return this.http.get<APIResponse>(environment.API_URL + Constant.API_METHOD_NAME.USER.GET_ALL_USERS);
    }
   
}
