import { Component, OnInit } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
// public data: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.get(environment.apiUrl).subscribe( data => {
    //   this.data = data;
    // });
  }

}
