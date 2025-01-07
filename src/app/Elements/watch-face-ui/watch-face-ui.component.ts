import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-face-ui',
  templateUrl: './watch-face-ui.component.html',
  styleUrl: './watch-face-ui.component.css',
})
export class WatchFaceUiComponent implements OnInit {
  watch__hour!: number;
  watch__min!: number;

  ngOnInit(): void {
    this.watch__hour = new Date().getHours();
    this.watch__min = new Date().getMinutes();
  }
}
