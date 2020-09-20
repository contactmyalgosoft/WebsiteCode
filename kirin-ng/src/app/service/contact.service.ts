import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContactVM } from '../viewModels/contactVM';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public apiUrl=environment.apiUrl;
  private accountApi ="api/account/";
  private contactApi ="api/contact/";
  private emailApi ="api/Email/";

  constructor(public http: HttpClient) { }

  
  SaveContact(Model: ContactVM) {
    const Url = this.apiUrl +  this.emailApi +  'SendEmail?ToEmail=' + Model.Email + '&Subject=' + Model.Subject + '&EmailBody=' + Model.Message;
   return this.http.post(Url,null).pipe();
  }
}
