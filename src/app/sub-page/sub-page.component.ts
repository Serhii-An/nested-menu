import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit {
  pageTitle: string = '';
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.pageTitle = this.route.snapshot.data[<keyof Data>'title'];
  }
}
