import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModelIntervention } from './modelintervention.component';



@Injectable({
  providedIn: 'root'
})
export class ModelInterventionService {
  readonly  host=environment.host+'ModelIntervention/';
  constructor(private http: HttpClient) { }


   getModelIntervention() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <ModelIntervention[]>res.data)
      .then(data => { return data; });
  }
 
  addModelModelIntervention(modelintervention:ModelIntervention):Observable<any> {

          return this.http.post<ModelIntervention>(this.host + 'Addmodelintervention', modelintervention)
   }


   deleteModelIntervention(modelintervention:ModelIntervention):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+modelintervention.Id);

}
getModelInterventionbyid(id:any):Observable<ModelIntervention>{
  
  return this.http.get<ModelIntervention>(this.host+"getbyid/"+id);

}
updateModelIntervention(modelintervention:ModelIntervention,Id:any):Observable<any>{
  
  return this.http.put<ModelIntervention>(this.host+"editmodelintervention/"+Id,modelintervention);

}

}
