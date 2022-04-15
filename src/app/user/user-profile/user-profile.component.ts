import { Component, OnInit } from '@angular/core';
import { UserProfileInfo } from '../models/userprofileinfo';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfileUrl = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2'

  userProfileObj = null

  constructor(public userService: UserService,) { }

  ngOnInit(): void {
    this.getUserProfileInfo();

  }

  getUserProfileInfo(): void {
    this.userService.GetRequest(this.userProfileUrl).subscribe((response: UserProfileInfo) => {
     
      if (response && response.name && response.email) {
        this.userProfileObj = response

      } else {
        alert('data error while receving from mockapi')
      }

    });
  }



}
