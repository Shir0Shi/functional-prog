import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jsonData from '../data/lab-data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-tamplate',
  templateUrl: './lab-tamplate.component.html',
  styleUrls: ['./lab-tamplate.component.css']
})
export class LabTamplateComponent implements OnInit {
  labTitle: string = 'Lab Work'; // Default title
  labData: any = {}; // Object to hold lab data
  titlePage: string = '';
  meta: string = '';
  taskCondition: string = '';
  tasks: string[] = [];
  decisionForIDE: string = '';
  codes: string[] = [];
  result: string[] = [];
  summary: string = '';
  constructor(
    private route: ActivatedRoute, 
    private router: Router
    ) {}

  ngOnInit() {
    // Retrieve the lab number from the route parameters
    this.route.paramMap.subscribe(params => {
      const labNumber = params.get('labNumber');
      
      if (labNumber) {
        this.labTitle = `Лабораторна робота №${labNumber}`;
        
        // Assign lab data from the imported JSON
        this.labData = jsonData[+labNumber - 1];
        this.titlePage = this.labData.titlePage;
        this.meta = this.labData.meta;
        this.taskCondition = this.labData.taskCondition;
        this.tasks = this.labData.tasks;
        this.decisionForIDE = this.labData.decisionForIDE;
        this.codes = this.labData.codes;
        this.result = this.labData.result;
        this.summary = this.labData.summary;
      }
      // this.result[0] = "D:\\mosha\\7semester\\ФП\\fp-labs\\functional-prog\\src\\app\\data\\lab1\\1.png"
      // this.result[0] = 'D:\\mosha\\7semester\\ФП\\fp-labs\\functional-prog\\src\\assets\\lab1\\1.png';
      // this.result[1] = 'D:\\mosha\\7semester\\ФП\\fp-labs\\functional-prog\\src\\assets\\lab1\\2.png';
      this.result[0] = 'assets/lab'+labNumber+'/1.png';
      if(labNumber && +labNumber < 8)
        this.result[1] = 'assets/lab'+labNumber+'/2.png';

    });
  }
  goToHomePage() {
    // Navigate to the home page (http://localhost:4200/)
    this.router.navigate(['/']);
  }

}
