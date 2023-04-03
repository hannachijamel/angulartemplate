
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PreventiveConditionelle } from "./preventiveconditionelle.component";







@Injectable({providedIn:"root"})
export class PreventiveConditionelleService{
    readonly  host=environment.host+'PrevConditionnelle';
    constructor(private http:HttpClient){

    }
    getAllpreventiveconditionelle(){
       
        return this.http.get<any>(this.host+'/getAll')
        .toPromise()
        .then(res => <PreventiveConditionelle[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchpreventiveconditionelle(keyword:string):Observable<PreventiveConditionelle[]>{
       
        return this.http.get<PreventiveConditionelle[]>(this.host+"?name_like="+keyword);

    }
   
    deletePreventiveConditionelle(preventiveconditionelle:PreventiveConditionelle):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'/delete/'+preventiveconditionelle.id);

    }
    savePreventiveConditionelle(preventiveconditionelle:PreventiveConditionelle):Observable<any>{
         
       
       
        return this.http.post<PreventiveConditionelle>(this.host+'/AddPrevConditionelle',preventiveconditionelle);
  

    }
    getPreventiveConditionellebyid(id:number):Observable<any>{
     
        return this.http.get<PreventiveConditionelle>(this.host+'/'+id);

    }
    updatePreventiveConditionelle(preventiveconditionelle:PreventiveConditionelle,id:any):Observable<any>{
        
        return this.http.put<PreventiveConditionelle>(this.host+'/editdPrevConditionelle/'+id,preventiveconditionelle);

    }



}