import { Observable } from "rxjs";

export interface Quote{
   _id:string
   quoteText:string
   by:string
   backgroundColor:string
   textColor:string
   likes:number
   userId:string
   created:string
   updated:string
}