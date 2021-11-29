import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  applyForm: FormGroup;
  image: File;
  constructor(private dataService:ApiService,private router:Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.applyForm = new FormGroup({
      name : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      applyfor : new FormControl('', Validators.required),
      experience : new FormControl('', Validators.required),
      message : new FormControl('', Validators.required),
     image_file : new FormControl('', Validators.required),
    });
  }

  onPhotoUpload(event) {
    this.image=(<File>event.target.files[0]);
    
  }

  get name() { return this.applyForm.get('name') }
  get phone() { return this.applyForm.get('phone') }
  get email() { return this.applyForm.get('email') }
  get applyfor() { return this.applyForm.get('applyfor') }
  get experience() { return this.applyForm.get('experience') }
  get message() { return this.applyForm.get('message') }
  
  applydata(applyForm){
    this.dataService.postApplyForm(applyForm.name,applyForm.phone,applyForm.email,applyForm.applyfor,applyForm.experience,applyForm.message,this.image).subscribe((res)=>{
       this.router.navigate(['/']);
      this.alertService.success(res.msg);
      });
   
  }
  

}
