import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private toastr: ToastrService, private _user:UserService) { }

  ngOnInit(): void {
    this._user.test().subscribe(res=>{
      console.log(res)
    })
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
