import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Intervention } from './intervention.component';




@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  readonly  host=environment.host+'Intervention/';
  constructor(private http: HttpClient) { }


   getIntervention() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <Intervention[]>res.data)
      .then(data => { return data; });
  }
 
  addIntervention(intervention:Intervention):Observable<any> {

          return this.http.post<Intervention>(this.host + 'Addintervention', intervention)
   }


   deleteIntervention(intervention:Intervention):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+intervention.Id);

}
getInterventionbyid(id:any):Observable<Intervention>{
  
  return this.http.get<Intervention>(this.host+"getbyid/"+id);

}
updateIntervention(intervention:Intervention,Id:any):Observable<any>{
  
  return this.http.put<Intervention>(this.host+"editintervention/"+Id,intervention);

}

}
