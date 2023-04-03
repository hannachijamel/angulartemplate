import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Degre } from './degres.component';


@Injectable({
  providedIn: 'root'
})
export class DegresService {
  readonly  host=environment.host+'Degre/';
  constructor(private http: HttpClient) { }


   getDegre() {
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <Degre[]>res.data)
      .then(data => { return data; });
  }
 
  addDegre(degre:Degre):Observable<any> {

          return this.http.post<Degre>(this.host + 'AddDegre', degre)
   }


   deleteDegre(degre:Degre):Observable<void>{
       
   
    
    return this.http.delete<void>(this.host+"delete/"+degre.Id);

}
getDegrebyid(id:any):Observable<Degre>{
  
  return this.http.get<Degre>(this.host+"getbyid/"+id);

}
updateDegre(degre:Degre,id:any):Observable<any>{
  
  return this.http.put<Degre>(this.host+"editDegre/"+id,degre);

}

}
