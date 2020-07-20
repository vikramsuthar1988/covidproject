import { Component, OnInit, PipeTransform} from '@angular/core';
import { AppService } from '../app.service';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  
];

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.css']
})
export class CovidDashboardComponent implements OnInit {

  coviddatalist: any;
  totalconfirmedCase: any;
  newConfCase: any;
  newDeathCase: any;
  totalDeatchCase: any;
  newRecoverCase: any;
  totalRecoverCase: any;

  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[];


  constructor(private apiService: AppService) { 
    this.refreshCountries();

  }

  

  ngOnInit(){
    this.apiService.getCovidData().subscribe((data)=>{
      this.coviddatalist = data['Global'];
      this.totalconfirmedCase = this.coviddatalist.TotalConfirmed;
      this.newConfCase = this.coviddatalist.NewConfirmed;
      this.newDeathCase = this.coviddatalist.NewDeaths;
      this.totalDeatchCase = this.coviddatalist.TotalDeaths;
      this.newRecoverCase = this.coviddatalist.NewRecovered;
      this.totalRecoverCase = this.coviddatalist.TotalRecovered;
      
      // all countires covid data 

      this.countries = data['Countries'];


    });
  }

  refreshCountries() {
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
