import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name:'waterpipe'
})
export class waterpipe implements PipeTransform{
    transform(value: any , limit:number) {
        // console.log(value) 
        // return value +" " +'my name is lakhan' 
        if(value.length > limit){
            return value.substr(0,limit) + " ..."   
        }  else{
            return value
        }
        
    }
}