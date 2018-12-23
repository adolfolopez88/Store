import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, keyframes, style, animate, stagger } from '@angular/animations';

interface Race {
  name: string;
  startInstant: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('listAnimation',  [

      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), {optional: true } ),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1 })
          ]))
        ]), {optional: true } ),

      ])
    ])
  ]
})
export class TestComponent implements OnInit {

  races: Race[];
  constructor() {
    this.races =  [
      { name: 'Name', startInstant: 'race detal'  },
      { name: 'Name', startInstant: 'race detal'  },
      { name: 'Name', startInstant: 'race detal'  },
    ];
  }

  ngOnInit() {
  }


  pushItem() {
    this.races.push({ name: 'Name', startInstant: 'race detal'  });
  }

  removeItem() {
    this.races.pop();
  }
}

