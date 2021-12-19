import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const id = (this.route.snapshot.paramMap.get('id'));
    
     console.log(id);
    
  }

}
