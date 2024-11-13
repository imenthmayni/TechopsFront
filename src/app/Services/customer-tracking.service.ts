import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerTracking } from '../models/customer-tracking';
const baseUrl = 'http://192.168.130.128:8089/CUSTUMERTRACKING' ;

@Injectable({
  providedIn: 'root'
})
export class CustomerTrackingService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<CustomerTracking[]> {

    return this.http.get<CustomerTracking[]>(baseUrl + '/retrieve-all-CustomerTracking');
}

addCustomerTracking(customerTracking:CustomerTracking):Observable<any>{
  return this.http.post<CustomerTracking>(baseUrl+'/add-CustomerTracking',customerTracking)
}
removeCustomerTracking(history_id: number): Observable<void> {
  return this.http.delete<void>(`${baseUrl}/remove-customerTracking/${history_id}`);
}
getCustomerTracking(history_id: number) {
  return this.http.get<any>(`http://192.168.130.128:8089/CUSTUMERTRACKING/retrieve-CustomerTracking/${history_id}`);
}

getTotalUsers(): Observable<number> {
  return this.http.get<number>(`${baseUrl}/total`);
}

}
