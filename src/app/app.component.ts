import { CoronaService } from './corona.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private corona: CoronaService){}

  countries: any;
  country: any;
  confirmed: Number;
  recovered: Number;
  deaths: Number;

  ngOnInit(){
    this.corona.getCountries().subscribe((data) => {
      console.log(data);
     this.countries = data;
    })
  }

  getCountry(country: any){
    this.country = country
  }

  getCovidData(){
   this.corona.getRealtimeData(this.country).subscribe((data)=>{
     console.log(data)
      var index = data.length-1;
      this.confirmed  = data[index].Confirmed;
      this.recovered  = data[index].Recovered;
      this.deaths  = data[index].Deaths;




   })
  }

}
