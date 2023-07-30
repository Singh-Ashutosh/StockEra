import { ApiService } from './../../../shared/service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.getFullStockInformation().subscribe(res => {
      console.log(res)
    })
  }



}
