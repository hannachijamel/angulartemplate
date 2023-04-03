import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemandeIntervention } from './demandeintervention.component';




@Injectable({
  providedIn: 'root'
})
export class DemandeInterventionService {
  readonly  host=environment.host+'DemandeIntervention/';
  constructor(private http: HttpClient) { }


   getDemandeIntervention() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <DemandeIntervention[]>res.data)
      .then(data => { return data; });
  }
 
  addDemandeIntervention(demandeintervention:DemandeIntervention):Observable<any> {

          return this.http.post<DemandeIntervention>(this.host + 'Adddemandeintervention', demandeintervention)
   }


   deleteDemandeIntervention(demandeintervention:DemandeIntervention):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+demandeintervention.Id);

}
getDemandeInterventionbyid(id:any):Observable<DemandeIntervention>{
  
  return this.http.get<DemandeIntervention>(this.host+"getbyid/"+id);

}
updateDemandeIntervention(demandeintervention:DemandeIntervention,Id:any):Observable<any>{
  
  return this.http.put<DemandeIntervention>(this.host+"editdemandeintervention/"+Id,demandeintervention);

}

}
