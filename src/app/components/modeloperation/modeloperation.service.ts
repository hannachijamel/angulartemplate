import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModelOperation } from './modeloperation.component';


@Injectable({
  providedIn: 'root'
})
export class ModelOperationService {
  readonly  host=environment.host+'ModelOperation/';
  constructor(private http: HttpClient) { }


   getModelOperation() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <ModelOperation[]>res.data)
      .then(data => { return data; });
  }
 
  addModelOperation(modeloperation:ModelOperation):Observable<any> {

          return this.http.post<ModelOperation>(this.host + 'AddModelOperation', modeloperation)
   }


   deleteModelOperation(modeloperation:ModelOperation):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+modeloperation.id);

}
getModelOperationbyid(id:any):Observable<ModelOperation>{
  
  return this.http.get<ModelOperation>(this.host+"getbyid/"+id);

}
updateModelOperation(modeloperation:ModelOperation,id:any):Observable<any>{
  
  return this.http.put<ModelOperation>(this.host+"editModelOperation/"+id,modeloperation);

}

}
