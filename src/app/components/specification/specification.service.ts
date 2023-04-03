import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Specification } from "./specification.component";

@Injectable({providedIn:"root"})
export class SpecificationService{
    readonly  host=environment.host+'specification/';
    constructor(private http:HttpClient){

    }
    getAllSpecification(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <Specification[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchSpecification(keyword:string):Observable<Specification[]>{
        let host=environment.host;
        return this.http.get<Specification[]>(host+"specifications?name_like="+keyword);

    }
   
    deleteSpecification(specification:Specification):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+specification.id);

    }
    saveSpecification(specification:Specification):Observable<any>{
         
       
       
        return this.http.post<Specification>(this.host+'Addspecification',specification);
  

    }
    getSpecificationbyid(id:number):Observable<any>{
     
        return this.http.get<Specification>(this.host+'getbyid/'+id);

    }
    updateSpecification(specification:Specification,id:any):Observable<any>{
        
        return this.http.put<Specification>(this.host+'editspecification/'+id,specification);

    }



}