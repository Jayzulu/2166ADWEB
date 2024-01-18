import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {



  // String Interpolation
  position = 'Web Developer'
  work_experience = 10
  email = 'jv0608921zul@gmail.com.com'
  website = 'jvgreatest.example.com'
  phone = '+981273145616'


   // Image Interpolation/binding
  imageUrl:string = "assets/profile-pic.png";
  imageW: number = 20;
  imageH: number = 20;
}
