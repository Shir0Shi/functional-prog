import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  universityName: string = 'Kyiv National University of Taras Schevchenko';
  faculty: string = 'Faculty of Informational Technology';
  department: string = 'Department of Computer Systems and Technologies';
  myName: string = 'Sofiia Yeremenko';
  myGroup: string = 'IPZ-44ms';
  course: string = 'Functional Programming';
  yearOfStudy: number = 2023;
  professor: string = 'Tetiana Kovalur';
  labProfessor: string = 'Anastasiia Nikolaienko';
  myPhoto = 'functional-prog/assets/myPhoto.jpeg';

}
