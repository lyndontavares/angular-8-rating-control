import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8cutomcontrol';

  model = { r1:3, r2:5 , nome :'lyndon'};

  onSumit(f) {
    console.log(f);
  }
}
