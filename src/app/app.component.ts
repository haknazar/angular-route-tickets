import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  result: any;
  route = [];
  ordered = [];
  dest = [];
  source = [];
  ngOnInit() {
    this.result = this.getRoute([
      ['JPN', 'PHL'],
      ['BRA', 'UAE'],
      ['USA', 'BRA'],
      ['UAE', 'JPN']
    ]);
  }
  getRoute(tickets) {
    let result;
    this.route = tickets;
    let found;
    tickets.forEach(d => {
      this.source.push(d[0]);
      this.dest.push(d[1]);
      found = this.source.filter(e => this.dest.indexOf(e) === -1);
    });
    result = this.fixArray(found);
    return result;
  }

  fixArray(s) {
    //  let ordered=[]
    this.ordered.push(s);
    this.route.forEach(d => {
      if (s == d[0]) {
        this.fixArray(d[1]);
      }
    });
    return this.ordered.toString();
  }
}
