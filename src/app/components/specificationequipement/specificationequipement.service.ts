import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Specificationequipement } from "./specificationequipement.component";


@Injectable({providedIn:"root"})
export class SpecificationEquipementService{
    readonly  host=environment.host+'specificationEquip/';
    constructor(private http:HttpClient){

    }
    getAllSpecificationequipement(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <Specificationequipement[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchSpecificationequipement(keyword:string):Observable<Specificationequipement[]>{
        
        return this.http.get<Specificationequipement[]>(this.host+"specificationequipements?name_like="+keyword);

    }
   
    deleteSpecificationequipement(specificationequipement:Specificationequipement):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+specificationequipement.id);

    }
    saveSpecificationequipement(specificationequipement:Specificationequipement):Observable<any>{
         
       
       
        return this.http.post<Specificationequipement>(this.host+'AddSpecEquip',specificationequipement);
  

    }
    getSpecificationequipementbyid(id:number):Observable<any>{
     
        return this.http.get<Specificationequipement>(this.host+'specificationequipement/'+id);

    }
    updateSpecificationequipement(specificationequipement:Specificationequipement,id_equip:any):Observable<any>{
        
        return this.http.put<Specificationequipement>(this.host+'editspecificationequip/'+id_equip,specificationequipement);

    }



}