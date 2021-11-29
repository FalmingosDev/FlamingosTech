import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent implements OnInit {
  form: FormGroup;
  firstBol: boolean = true;
  secBol: boolean = false;
  thridBol: boolean = false;
  fourthBol: boolean = false;
  fifthBol: boolean = false;
  sixthBol: boolean = false;
  sevBol: boolean = false; 
  eightBol: boolean = false;
  nineBol: boolean = false;
  errorBol:boolean=false;
  a_firstOther:any="";

  spinnerType:string;
  spinnerName:string;
  
  FirstBox: Array<any> = [];
  SecBox: Array<any> = [];

  constructor(private fb: FormBuilder,private dataService:ApiService,private router:Router,private spinner: NgxSpinnerService,private alertService: AlertService) {
 
    this.form = this.fb.group({
      checkFirstArray: this.fb.array([]),
      checkFirstOther:null,
      checkSecArray: this.fb.array([]),
      checkSecOther: null,
      checkThridbox: null,
      checkFourthbox: null,
      checkFifthbox: null,
      checkSixbox: null,
      checkSevenbox: null,
      checkEightbox: null,
      checkNinebox: null
    });
  }
  ngOnInit(): void {
    
    this.dataService.fetch_req_demo().subscribe((res)=>{
      // this.spinner.hide()
      this.FirstBox=res.goalData;
      this.SecBox=res.strategyData;
    });
  }

  //1st box
  onFirstCheckboxChange(e) {
    const checkFirstArray: FormArray = this.form.get('checkFirstArray') as FormArray;

    if (e.target.checked) {
      checkFirstArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkFirstArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkFirstArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  firstOtherClick(){
    if(!(<HTMLFormElement>document.getElementById('check4')).checked){
      (<HTMLFormElement>document.getElementById('firstOtherText')).value = null;
      this.form.value.checkFirstOther=null;
      return;
    }
  }

  firstOther(e) {
    if (e.target.value) {
        this.a_firstOther=e.target.value;
        this.form.value.checkFirstOther=this.a_firstOther;
    }
  }

  side_next(e: any) {
    e.preventDefault();
    if (this.form.value.checkFirstArray.length == 0 && this.form.value.checkFirstOther==null ) {
      // alert("At least choose one field");
       this.errorBol=true;
      window.setTimeout(() => {
        this.errorBol=false;
      }, 5000)
      return;
    }
    this.errorBol=false;
    this.firstBol = false;
    this.secBol = true;
  }
  //2nd box
  onSecCheckboxChange(e) {
    const checkSecArray: FormArray = this.form.get('checkSecArray') as FormArray;
  
    if (e.target.checked) {
      checkSecArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkSecArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkSecArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.form.value.checkFirstOther=this.a_firstOther;
  }
  secOtherClick(){
    if(!(<HTMLFormElement>document.getElementById('check5')).checked){
      (<HTMLFormElement>document.getElementById('secOtherText')).value = null;
      this.form.value.checkSecOther=null;
      return;
    }
  }
  secOther(e) {
    if (e.target.value) {
      this.form.value.checkSecOther=e.target.value;
    }
  }
  side_prev_2(): void {

    this.firstBol = true;
    this.secBol = false;
  }
  side_next2() {
    if (this.form.value.checkSecArray.length == 0 && this.form.value.checkSecOther==null) {
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.secBol = false;
    this.thridBol = true;
  }

  //3rd box
  onThridBox(e){
    this.form.value.checkThridbox=e.target.value;
  }
  side_prev_3(): void {
    this.secBol = true;
    this.thridBol = false;
  }
  side_next_3(): void {
    if(this.form.value.checkThridbox==null){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.thridBol = false;
    this.fourthBol = true;
  }

  //4th box
  side_prev_4(): void {
    this.fourthBol = false;
    this.thridBol = true;
  }
  side_next_4() {
    const inputElement = (<HTMLInputElement>document.getElementById("fourth_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkFourthbox=inputElement;
    this.fourthBol = false;
    this.fifthBol = true;
  }

  //5th box
  side_prev_5(): void {
    this.fifthBol = false;
    this.fourthBol = true;
  }
  side_next_5(): void {
    const inputElement = (<HTMLInputElement>document.getElementById("fifth_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkFifthbox=inputElement;
    this.fifthBol = false;
    this.sixthBol = true;
  }

  //6th box
  side_prev_6(): void {
    this.sixthBol = false;
    this.fifthBol = true;
  }
  side_next_6(): void {
    const inputElement = (<HTMLInputElement>document.getElementById("six_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkSixbox=inputElement;
    this.sixthBol = false;
    this.sevBol = true;
  }


  //7th box
  side_prev_7(): void {
    this.sevBol = false;
    this.sixthBol = true;
  }
  side_next_7() {
   
    const inputElement = (<HTMLInputElement>document.getElementById("seven_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkSevenbox=inputElement;
    this.sevBol = false;
    this.eightBol = true;
  }


  // 8th box
  side_prev_8(): void {
    this.eightBol = false;
    this.sevBol = true;

  }
  side_next_8(): void {
    const inputElement = (<HTMLInputElement>document.getElementById("eight_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkEightbox=inputElement;
    this.eightBol = false;
    this.nineBol = true;
  }


  //9th box
  side_prev_9(): void {
    this.nineBol = false;
    this.eightBol = true;
  }
  onSubmit(e){
    e.preventDefault();
    this.spinner.show();
    const inputElement = (<HTMLInputElement>document.getElementById("nine_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkNinebox=inputElement;
    this.dataService.onRequestdemoSubmit(this.form.value).subscribe((res)=>{
      this.spinner.hide();
      if(res.success){
        this.alertService.success('Your Request has been Submitted');
        this.router.navigate(['/']);
      }
    }); 
  }
}