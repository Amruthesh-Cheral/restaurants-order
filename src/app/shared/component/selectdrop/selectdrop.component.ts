import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiHelper } from 'src/app/core/service/api.helper';
import { ApiEndPoints } from 'src/app/core/constants';
@Component({
  selector: 'app-selectdrop',
  templateUrl: './selectdrop.component.html',
  styleUrls: ['./selectdrop.component.scss']
})
export class SelectdropComponent implements OnInit {
   dropdowns: { items: string[] }[] = [];
   constructor(private router: Router,private apiHelper : ApiHelper){
 
   }
   ngOnInit(): void {
     this.onloadSearch();
   }

   onSubmit(event:any,index :number){
     console.log(event)
     const data = {
        type : event
     }
     
     this.apiHelper.post(data,ApiEndPoints.search,true).subscribe((response)=>{
         if (this.dropdowns.length > index + 1) {
           this.dropdowns = this.dropdowns.slice(0, index + 1);
       }
       if (response.data.length ) {
         this.dropdowns.push({ items: response.data });
       }
      
     })
      
   }
   onloadSearch(){
        let data = {
             type : ""
        }
        this.apiHelper.post(data,ApiEndPoints.search,true).subscribe((response)=>{
            console.log(response)
            this.dropdowns.push({items:response.data}); 
            console.log(this.dropdowns)
 
        })
   }
}


