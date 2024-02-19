import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.scss']
})

export class CommonPageComponent implements OnInit {
  pageTitle: string = '';
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.pageTitle = this.route.snapshot.data[<keyof Data>'title'];
  }
}
