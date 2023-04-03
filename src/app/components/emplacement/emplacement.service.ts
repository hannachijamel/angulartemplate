import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Emplacement } from "./emplacement.component";






@Injectable({providedIn:"root"})
export class EmplacementService{
    readonly  host=environment.host+'emplacement/';
    constructor(private http:HttpClient){

    }
    getAllEmplacement(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <Emplacement[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchEmplacement(keyword:string):Observable<Emplacement[]>{
        let host=environment.host;
        return this.http.get<Emplacement[]>(host+"emplacements?name_like="+keyword);

    }
   
    deleteEmplacemnt(emplacement:Emplacement):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+emplacement.id);

    }
    saveEmlpacement(emplacement:Emplacement):Observable<any>{
         
       
       
        return this.http.post<Emplacement>(this.host+'Addemplacement',emplacement);
  

    }
    getEmplacemntbyid(id:number):Observable<any>{
     
        return this.http.get<Emplacement>(this.host+'emplacements/'+id);

    }
    updateEmplacement(emplacement:Emplacement,id:any):Observable<any>{
        
        return this.http.put<Emplacement>(this.host+'editemplacement/'+id,emplacement);

    }



}