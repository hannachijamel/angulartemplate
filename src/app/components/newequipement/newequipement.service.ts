import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Newequipement } from "./newequipement.component";

@Injectable({providedIn:"root"})
export class NewequipementService{
    readonly  host=environment.host+'Equipement/';
    constructor(private http:HttpClient){

    }
    getAllEquipement(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <Newequipement[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchEquipement(keyword:string):Observable<Newequipement[]>{
        
        return this.http.get<Newequipement[]>(this.host+"equipements?name_like="+keyword);

    }
   
    deleteEquipement(equipement:any):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+equipement.id);

    }
    saveEquipement(equipement:Newequipement):Observable<any>{
         
       
       
        return this.http.post<Newequipement>(this.host+'AddEquipement',equipement);
  

    }
    getEquipementbyid(id:number):Observable<any>{
     
        return this.http.get<Newequipement>(this.host+'equipements/'+id);

    }
    updateEquipement(equipement:Newequipement,id:any):Observable<any>{
        
        return this.http.put<Newequipement>(this.host+'editEquipement/'+id,equipement);

    }

    getEquipMaxid(){
    
        return this.http.get(this.host+'getMaxid');

    }


}