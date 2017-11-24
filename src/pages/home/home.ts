import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  public notify(event)
  {
    var xhttp = new XMLHttpRequest();
    if(event.checked)
    {
      xhttp.open("GET", "http://192.168.0.150/led1on\\", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
    }else 
    {
      xhttp.open("GET", "http://192.168.0.150/led1off\\", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
    }
  }
  public notify2(event)
  {
    var xhttp = new XMLHttpRequest();
    if(event.checked)
    {
      xhttp.open("GET", "http://192.168.0.150/led2on\\", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
    }else 
    {
      xhttp.open("GET", "http://192.168.0.150/led2off\\", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
    }
  }
  public notify3(event)
  {
    var xhttp = new XMLHttpRequest();
    if(event.checked)
    {
      xhttp.open("GET", "http://192.168.0.150/led3on\\", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
    }else 
    {
      xhttp.open("GET", "http://192.168.0.150/led3off\\", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
    }
  }
}
