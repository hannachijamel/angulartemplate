import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Equipement } from "./equipement.component";







@Injectable({providedIn:"root"})
export class EquipementService{
    readonly  host=environment.host+'Equipement/';
    constructor(private http:HttpClient){

    }
    getAllEquipement(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <Equipement[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchEquipement(keyword:string):Observable<Equipement[]>{
        
        return this.http.get<Equipement[]>(this.host+"equipements?name_like="+keyword);

    }
   
    deleteEquipement(equipement:Equipement):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+equipement.id);

    }
    saveEquipement(equipement:Equipement):Observable<any>{
         
       
       
        return this.http.post<Equipement>(this.host+'AddEquipement',equipement);
  

    }
    getEquipementbyid(id:number):Observable<any>{
     
        return this.http.get<Equipement>(this.host+'equipements/'+id);

    }
    updateEquipement(equipement:Equipement,id:any):Observable<any>{
        
        return this.http.put<Equipement>(this.host+'editEquipement/'+id,equipement);

    }



}