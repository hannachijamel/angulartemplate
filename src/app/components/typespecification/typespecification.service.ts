import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TypeSpecification } from "./typespecification.component";


@Injectable({providedIn:"root"})
export class TypeSpecificationService{
    readonly  host=environment.host+'TypeSpecification/';
    constructor(private http:HttpClient){

    }
    getAllTypeSpecification(){
       
        return this.http.get<any>(this.host+'getAll')
        .toPromise()
        .then(res => <TypeSpecification[]>res.data)
        .then(data => { return data; });
    }
   
  
    searchTypeSpecification(keyword:string):Observable<TypeSpecification[]>{
        let host=environment.host;
        return this.http.get<TypeSpecification[]>(host+"typespecifications?name_like="+keyword);

    }
   
    deleteTypeSpecification(typespecification:TypeSpecification):Observable<void>{
         
        
        
        return this.http.delete<void>(this.host+'delete/'+typespecification.id);

    }
    saveTypeSpecification(typespecification:TypeSpecification):Observable<any>{
         
       
       
        return this.http.post<TypeSpecification>(this.host+'AddTypeSpecification',typespecification);
  

    }
    getTypeSpecificationbyid(id:number):Observable<any>{
     
        return this.http.get<TypeSpecification>(this.host+'getbyid/'+id);

    }
    updateTypeSpecification(typespecification:TypeSpecification,id:any):Observable<any>{
        
        return this.http.put<TypeSpecification>(this.host+'editTypeSpecification/'+id,typespecification);

    }



}