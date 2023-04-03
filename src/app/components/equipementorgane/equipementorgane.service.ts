import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EquipementOrgane } from "./equipementorgane.component";


@Injectable({providedIn:"root"})
export class EquipementOrganeService {
    readonly  host=environment.host+'equipementOrganes/';
    constructor(private http:HttpClient){

    }
    getAllEquipementOrganes(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <EquipementOrgane[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchEquipementOrganes(keyword:string):Observable<EquipementOrgane[]>{
        let host=environment.host;
        return this.http.get<EquipementOrgane[]>(host+"equipementorganes?name_like="+keyword);

    }
   
    deleteEquipementOrganes(equipementorgane:EquipementOrgane):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+equipementorgane.id_Organe);

    }
    saveEquipementOrganes(equipementorgane:EquipementOrgane):Observable<any>{
         
       
       
        return this.http.post<EquipementOrgane>(this.host+'AddEquipementOrgane',equipementorgane);
  

    }
    getEquipementOrganesbyid(id:number):Observable<any>{
     
        return this.http.get<EquipementOrgane>(this.host+'EquipementOrgane/'+id);

    }
    updateEquipementOrganes(equipementorganes:EquipementOrgane,id_Organe:any):Observable<any>{
        
        return this.http.put<EquipementOrgane>(this.host+'editEquipementOrgane/'+id_Organe,equipementorganes);

    }



}
