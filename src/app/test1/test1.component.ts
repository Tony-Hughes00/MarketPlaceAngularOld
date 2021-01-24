import { Component, OnInit } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
public data: any = '';
public error = 'no error yet';
public response: string | any = 'nothing sent yet';
  constructor(private http: HttpService) { }

  ngOnInit() {
    console.log('url', environment.apiUrl + 'test');
    this.http.get(environment.apiUrl + 'test').subscribe( data => {
        this.data = data;
        console.log('test request', data);
        this.error = 'return OK';
        }, error => {
          console.log(error.message);
          console.log(error.error);
          this.error = error.message;
        });
  }
  post() {
    const data = 'This is the data posted';
    this.http.post('test', data)
      .subscribe( response => {
        console.log(response);
        this.response = response;
      } );
  }
}
