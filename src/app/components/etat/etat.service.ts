import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etat } from './etat.component';

@Injectable({
  providedIn: 'root'
})
export class EtatService {
  readonly  host=environment.host+'Etat/';
  constructor(private http: HttpClient) { }


   getEtat() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <Etat[]>res.data)
      .then(data => { return data; });
  }
 
  addEtat(etat:Etat):Observable<any> {

          return this.http.post<Etat>(this.host + 'AddEtat', etat)
   }


   deleteEtat(etat:Etat):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+etat.Id);

}
getEtatbyid(id:any):Observable<Etat>{
  
  return this.http.get<Etat>(this.host+"getbyid/"+id);

}
updateEtat(etat:Etat,id:any):Observable<any>{
  
  return this.http.put<Etat>(this.host+"editEtat/"+id,etat);

}

}
