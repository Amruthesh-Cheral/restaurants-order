import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiEndPoints } from 'src/app/core/constants';
import { ApiHelper } from 'src/app/core/service/api.helper';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  profileForm!: FormGroup;
  profileData: any = [];
  noProfilepic: boolean = true;
  spinner: boolean = false;
  imageUrl: string = 'assets/images/profile-pic.jpg';
  fileToUpload: any;

  constructor(public apiHelper: ApiHelper, public toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      userName: new FormControl(' ', Validators.required),
      lastName: new FormControl(' '),
      email: new FormControl(' ', Validators.required),
      number: new FormControl(' ', Validators.required),
    })
    this.getProfileAll();
  }

  getProfileAll() {
    let data = 2013335162348;
    this.apiHelper.post({ data }, ApiEndPoints.profileGet).subscribe((response) => {
      this.profileData = response.data.profile;
      this.profileForm.patchValue({
        userName: response.data.profile.name,
        email: response.data.profile.email,
        number: response.data.profile.contact,
      })
    })
  }

  updateProfile() {
    this.spinner = true
    if (this.profileForm.invalid) {
      return
    }
    const credentials = {
      name: this.profileForm.value.userName,
      email: this.profileForm.value.email,
      contact: this.profileForm.value.number,
      // lastName: this.profileForm.value.lastname,
    }
    setTimeout(() => {
      this.apiHelper.post(credentials, ApiEndPoints.profileUpdate).subscribe((res) => {
        this.toastr.success('Profile Update Succesfully!');
        this.spinner = false
        this.getProfileAll();
      }, error => {
        this.toastr.error('Error !');
      })
    }, 1000);
  }


  // FILE UPDALOAD
  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.toastr.success('Profile Pic Updated Succesfully!');
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  // FILE UPDALOAD
}
