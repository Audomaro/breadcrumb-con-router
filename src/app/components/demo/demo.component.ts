import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public data$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data$ = this.activatedRoute.data;
  }

}