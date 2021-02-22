import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() {
    console.log('constructor')
   }

  ngOnInit(): void {
    console.log('onInit')
  }
ngOnChanges(){console.log('on changes')}
ngDoCheck(){console.log('do check')}
ngAfterContentInit(){console.log('after contentinit')}
ngAfterContentChecked(){console.log('after contentchecked')}
ngAfterViewInit(){console.log('after view init')}
ngAfterViewChecked(){console.log('after view checked')}
ngOnDestory(){console.log('on destroy')}

}
