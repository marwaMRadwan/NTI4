import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-changeimg',
  templateUrl: './changeimg.component.html',
  styleUrls: ['./changeimg.component.css']
})
export class ChangeimgComponent implements OnInit {
userData:any=''
  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.authMe()
  }
authMe(){
  this._user.me().subscribe(res=>{
    this.userData = res
  })
}

selectedFile:any=''
onFileChange(event){
this.selectedFile= event.target.files[0]
}
onUpload(){
  console.log('hi')
  const uploadData = new FormData()
  uploadData.append('profile', this.selectedFile, this.selectedFile.name)
this._user.editimg(uploadData).subscribe(res=>{
  console.log(res)
})
}
}
