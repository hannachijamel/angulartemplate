import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PreventivePeriodique } from "./prevenitiveperiodique.component";

@Injectable({providedIn:"root"})
export class PreventivePeriodiqueService{
    readonly  host=environment.host+'PrevPeriodique/';
    constructor(private http:HttpClient){

    }
    getAllPreventivePeriodique(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <PreventivePeriodique[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchPreventivePeriodique(keyword:string):Observable<PreventivePeriodique[]>{
        let host=environment.host;
        return this.http.get<PreventivePeriodique[]>(host+"preventiveperiodiques?name_like="+keyword);

    }
   
    deletePreventivePeriodique(preventiveperiodique:PreventivePeriodique):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+preventiveperiodique.id);

    }
    savePreventivePeriodique(preventiveperiodique:PreventivePeriodique):Observable<any>{
         
       
       
        return this.http.post<PreventivePeriodique>(this.host+'AddPrevperiodique',preventiveperiodique);
  

    }
    getEmplacemntbyid(id:number):Observable<any>{
     
        return this.http.get<PreventivePeriodique>(this.host+'preventiveperiodiques/'+id);

    }
    updatePreventivePeriodique(preventiveperiodique:PreventivePeriodique,id_Equip:any):Observable<any>{
        
        return this.http.put<PreventivePeriodique>(this.host+'editPrevperiodique/'+id_Equip,preventiveperiodique);

    }



}