import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
// import { ValueTransformer } from '@angular/compiler/src/util';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

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

  
  FirstBox: Array<any> = [];
  SecBox: Array<any> = [
    // { name: 'SEO',value:1 },
    // { name: 'PPC advertising',value:2 },
    // { name: 'Social media',value:3 },
    // { name: 'Marketplaces (Amazon, Walmart, etc.)',value:4 }
  ];

  constructor(private fb: FormBuilder,private dataService:ApiService,private router:Router) {
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
    })
  }
  ngOnInit(): void {
    // this.sec_box.style.display='none';
    this.dataService.fetch_req_demo().subscribe((res)=>{
      console.log(res);
      this.FirstBox=res.goalData;
      this.SecBox=res.strategyData;
    })
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

    console.log(this.form.value.checkFirstArray)
  }

  firstOther(e) {
    if (e.target.value) {
        this.a_firstOther=e.target.value;
        this.form.value.checkFirstOther=this.a_firstOther;
    }

    /*const checkFirstOther: FormArray = this.form.get('checkFirstOther') as FormArray;
    if (e.target.checked) {
      checkFirstOther.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkFirstOther.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkFirstOther.removeAt(i);
          return;
        }
        i++;
      });
    }*/
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
    // var first_box = <HTMLFormElement>document.getElementById('first_side');
    // first_box.style.display='none';

    // var sec_box = <HTMLFormElement>document.getElementById('sec_side');
    // sec_box.style.display='block';

  }



  

  //2nd box
  onSecCheckboxChange(e) {
    console.log(this.form.value)
    const checkSecArray: FormArray = this.form.get('checkSecArray') as FormArray;
  
    if (e.target.checked) {

      // this.form.value.checkSecArray.push(e.target.value);
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
    console.log(this.form.value.checkSecArray);
    console.log(this.form.value);
  }
  secOther(e) {
    if (e.target.value) {
      this.form.value.checkSecOther=e.target.value;
    }
  }
  side_prev_2(): void {

    this.firstBol = true;
    this.secBol = false;
    // var first_box = <HTMLFormElement>document.getElementById('first_side');
    // first_box.style.display='block';

    // var sec_box = <HTMLFormElement>document.getElementById('sec_side');
    // sec_box.style.display='none';
  }
  side_next2() {
    if (this.form.value.checkSecArray.length == 0 && this.form.value.checkSecOther==null) {
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.secBol = false;
    this.thridBol = true;
    console.log(this.form.value)
  }

  //3rd box
  onThridBox(e){
    this.form.value.checkThridbox=e.target.value;
    console.log(this.form.value)
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
    console.log(this.form.value)
  }

  //4th box
  side_prev_4(): void {
    this.fourthBol = false;
    this.thridBol = true;
  }
  side_next_4() {
    const inputElement = (<HTMLInputElement>document.getElementById("fourth_box")).value;
    if(inputElement==""){
      // alert("field is required");
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkFourthbox=inputElement;
    this.fourthBol = false;
    this.fifthBol = true;
    console.log(this.form.value)
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
    console.log(this.form.value)
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
    //six_box
    this.sixthBol = false;
    this.sevBol = true;
    console.log(this.form.value)
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
    console.log(this.form.value)
  }


  // 8th box
  side_prev_8(): void {
    this.eightBol = false;
    this.sevBol = true;

  }
  side_next_8(): void {
    console.log(this.form.value)
    const inputElement = (<HTMLInputElement>document.getElementById("eight_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkEightbox=inputElement;
    console.log(this.form.value)
    this.eightBol = false;
    this.nineBol = true;
  }


  //9th box
  side_prev_9(): void {
    this.nineBol = false;
    this.eightBol = true;
  }
  onSubmit(e){
    console.log(this.form.value)
    e.preventDefault();
    const inputElement = (<HTMLInputElement>document.getElementById("nine_box")).value;
    if(inputElement==""){
      this.errorBol=true;
      return;
    }
    this.errorBol=false;
    this.form.value.checkNinebox=inputElement;
    this.dataService.onRequestdemoSubmit(this.form.value).subscribe((res)=>{
      if(res.success){
        alert(res.msg);
        this.router.navigate(['/']);
      }
    });
  }
}