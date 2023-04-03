import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TypeEmplacement } from "./typeemplacement.component";



@Injectable({providedIn:"root"})
export class TypeEmplacementService{
    readonly  host=environment.host+'typeemplacement/';
    constructor(private http: HttpClient) { }

    
    getAllTypeEmplacement(){
      
        return this.http.get<any>(this.host+"getAll").toPromise()   .then(res => <TypeEmplacement[]>res.data)
        .then(data => { return data; });;

    }
   
  
    searchTypeEmplacement(keyword:string):Observable<TypeEmplacement[]>{
        let host=environment.host;
        return this.http.get<TypeEmplacement[]>(host+"type_emplacements?name_like="+keyword);

    }
   
    deleteTypeEmplacement(typeemplacement:TypeEmplacement):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+"delete/"+typeemplacement.id);

    }
    saveTypeEmplacement(typeemplacement:TypeEmplacement):Observable<any>{
         
      
       
        return this.http.post<TypeEmplacement>(this.host+"AddTypeEmplacement",typeemplacement);

    }
    getTypeEmplacementbyid(id:number):Observable<TypeEmplacement>{
        
        return this.http.get<TypeEmplacement>(this.host+"type_emplacements/"+id);

    }
    updateTypeEmplacement(typeemplacement:TypeEmplacement,id:any):Observable<any>{
        
        return this.http.put<TypeEmplacement>(this.host+"editType_Emplacement/"+id,typeemplacement);

    }



}