import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PreventiveParCompteur } from './preventive-par-compteur.component';

@Injectable({
  providedIn: 'root'
})
export class PreventiveParCompteurService {

  readonly  host=environment.host+'PrevParCompteur/';
  constructor(private http:HttpClient){

  }
  getAllPreventiveParCompteur(){
     
      return this.http.get<any>(this.host+'getAll')
      .toPromise()
      .then(res => <PreventiveParCompteur[]>res.data)
      .then(data => { return data; });
  }
 

  searchPreventiveParCompteur(keyword:string):Observable<PreventiveParCompteur[]>{
      let host=environment.host;
      return this.http.get<PreventiveParCompteur[]>(host+"preventiveparcompteur?name_like="+keyword);

  }
 
  deletePreventiveParCompteur(preventiveparecompteur:PreventiveParCompteur):Observable<void>{
       
      
      
      return this.http.delete<void>(this.host+'delete/'+preventiveparecompteur.id);

  }
  savePreventiveParCompteur(preventiveparecompteur:PreventiveParCompteur):Observable<any>{
       
     
     
      return this.http.post<PreventiveParCompteur>(this.host+'AddPrevCompteur',preventiveparecompteur);


  }
  getEmplacemntbyid(id:number):Observable<any>{
   
      return this.http.get<PreventiveParCompteur>(this.host+'prevenitiveparcompteurs/'+id);

  }
  updatePreventiveParecompteur(preventiveparecompteur:PreventiveParCompteur,id_Equip:any):Observable<any>{
      
      return this.http.put<PreventiveParCompteur>(this.host+'editPrevCompteur/'+id_Equip,preventiveparecompteur);

  }



}
