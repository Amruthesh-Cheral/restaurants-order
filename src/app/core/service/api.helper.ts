import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiHelper {

    // private apiUrl = 'http://localhost:3001/food/add-food-item';

    private dataSource = new BehaviorSubject<any[]>([]);
    currentData = this.dataSource.asObservable();

    
    constructor(private http: HttpClient, private cookieService: CookieService) { }
    ngOnInit(): void { }
    post(data: any, endPoint: string, authRequired: boolean = true): Observable<any> {
        let options: { [key: string]: string } = {
            'Accept': 'application/json'
        }

        // if (authRequired) {
        //     let sessionString: any = localStorage.getItem("session");
        //     let session = JSON.parse(sessionString);
        //     let sessionId = session.id;
        //     options['session-id'] = sessionId
        // }

        let headersJson = new HttpHeaders(options);
        let url = environment.baseUrl + endPoint;

        return this.http.post<any>(url, data, { headers: headersJson });
    }

    // alldata(foodData: any): Observable<any>  {
    //     // console.log(foodData,'datadatadatadata');
    //     // const currentData = this.dataSource.value;
    //     // this.dataSource.next([...currentData, foodData])
    //     // const fooditemArray = JSON.parse(localStorage.getItem('fooditemArray') || '[]');
    //     // fooditemArray.push(foodData);
    //     // localStorage.setItem('fooditemArray', JSON.stringify(fooditemArray));
    //     console.log(this.apiUrl, foodData);
    //     return this.http.post(this.apiUrl, foodData);
    // }

}
