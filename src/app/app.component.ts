import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherAPI';

  
  constructor(private apiService:ApiService){

  }

  ngOnInit(){
    this.getApiResponse();
  }


  name0 :string ="";
  temperature0 :string='';
  icon0:string = '';
  detailInfo0:string ="";

  name :string ="";
  temperature :string='';
  icon:string = '';
  detailInfo:string ="";

  getApiResponse() : void {
    this.apiService.getWeather()
    .subscribe((data) => {     
                            //----- First Forcast ------                      
                            this.name0 = data.properties.periods[0].name;
                            this.temperature0 = data.properties.periods[0].temperature;
                            this.icon0 = data.properties.periods[0].icon;
                            this.detailInfo0 = data.properties.periods[0].detailedForecast;
                     
                            // console logging just to check output values          
                            console.log(this.name0);
                            console.log(this.temperature0);
                            console.log(this.icon0);
                            console.log(this.detailInfo0);
                         
                            //------ Second Forcast---------

                            this.name = data.properties.periods[1].name;
                            this.temperature = data.properties.periods[1].temperature;
                            this.icon = data.properties.periods[1].icon;
                            this.detailInfo = data.properties.periods[1].detailedForecast;
                              
                            // console logging just to check output values  
                            console.log(this.name);
                            console.log(this.temperature);
                            console.log(this.icon);
                            console.log(this.detailInfo);
                           
                            
                        });

  }
}
