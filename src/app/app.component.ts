import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'a7a'; 
  public userInput = ""

  async getCurrent(input: string) {
    const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }

  buttonClick(){
    this.getCurrent(this.userInput)
  }






}

