import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  intervalSub: any;
  // title = 'angular-video-series';

  ngOnInit(){
    this.intervalSub = setInterval(() => {
      console.log('Hellow from ngOnInit')
    }, 1000)
  }

  ngOnDestroy(){
    if (this.intervalSub){
      clearInterval(this.intervalSub)
    }
  }
}
