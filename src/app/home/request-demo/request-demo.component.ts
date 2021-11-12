import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

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
  FirstBox: Array<any> = [
    { name: 'I want to drive more leads' },
    { name: 'I want to earn more online sales' },
    { name: 'I want to improve my ROI' }
  ];
  SecBox: Array<any> = [
    { name: 'SEO' },
    { name: 'PPC advertising' },
    { name: 'Social media' },
    { name: 'Marketplaces (Amazon, Walmart, etc.)' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkFirstArray: this.fb.array([]),
      checkSecArray: this.fb.array([]),
      checkThridArray: null
    })
  }
  ngOnInit(): void {
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
    console.log("other triggred")
    const checkFirstArray: FormArray = this.form.get('checkFirstArray') as FormArray;
    if (e.target.value) {
      checkFirstArray.push(new FormControl(e.target.value));
      console.log(this.form.value.checkFirstArray)
    }
  }

  side_next(e: any) {
    e.preventDefault();
    if (this.form.value.checkFirstArray.length == 0) {
      alert("At least choose one field");
      return;
    }
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

    console.log(this.form.value.checkSecArray)
  }
  secOther(e) {
    const checkSecArray: FormArray = this.form.get('checkSecArray') as FormArray;
    if (e.target.value) {
      checkSecArray.push(new FormControl(e.target.value));
      console.log(this.form.value.checkSecArray)
    }
  }
  side_prev_2(): void {
    this.firstBol = true;
    this.secBol = false;
  }
  side_next2() {
    if (this.form.value.checkSecArray.length == 0) {
      alert("At least choose one field");
      return;
    }
    this.secBol = false;
    this.thridBol = true;
  }

  //3rd box
  onThridBox(e){
    this.form.value.checkThridArray=e.target.value;
    console.log(this.form.value.checkThridArray)
    console.log(this.form.value)
  }
  side_prev_3(): void {
    this.secBol = true;
    this.thridBol = false;
  }
  side_next_3(): void {
    if(this.form.value.checkThridArray==null){
      alert("At least choose one field");
      return;
    }
    this.thridBol = false;
    this.fourthBol = true;
  }

  //4th box
  side_prev_4(): void {
    this.fourthBol = false;
    this.thridBol = true;
  }
  side_next_4(): void {
    this.fourthBol = false;
    this.fifthBol = true;
  }

  //5th box
  side_prev_5(): void {
    this.fifthBol = false;
    this.fourthBol = true;
  }
  side_next_5(): void {
    this.fifthBol = false;
    this.sixthBol = true;
  }

  //6th box
  side_prev_6(): void {
    this.sixthBol = false;
    this.fifthBol = true;
  }
  side_next_6(): void {
    this.sixthBol = false;
    this.sevBol = true;
  }


  //7th box
  side_prev_7(): void {
    this.sevBol = false;
    this.sixthBol = true;
  }
  side_next_7(): void {
    this.sevBol = false;
    this.eightBol = true;
  }


  // 8th box
  side_prev_8(): void {
    this.eightBol = false;
    this.sevBol = true;

  }
  side_next_8(): void {
    this.eightBol = false;
    this.nineBol = true;
  }


  //9th box
  side_prev_9(): void {
    this.nineBol = false;
    this.eightBol = true;
  }

}
