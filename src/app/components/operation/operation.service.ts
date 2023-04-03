import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operation } from './operation.component';



@Injectable({
  providedIn: 'root'
})
export class OperationService {
  readonly  host=environment.host+'Operation/';
  constructor(private http: HttpClient) { }


   getOperation() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <Operation[]>res.data)
      .then(data => { return data; });
  }
 
  addOperation(operation:Operation):Observable<any> {

          return this.http.post<Operation>(this.host + 'AddOperation', operation)
   }


   deleteOperation(operation:Operation):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+operation.id);

}
getOperationbyid(id:any):Observable<Operation>{
  
  return this.http.get<Operation>(this.host+"getbyid/"+id);

}
updateOperation(operation:Operation,id:any):Observable<any>{
  
  return this.http.put<Operation>(this.host+"editOperation/"+id,operation);

}

}
