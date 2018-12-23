import { transition, animate, keyframes, trigger, style, query, stagger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import * as kf from '../../models/keyframes';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MessagingService, Message } from '../../services/messaging.service';

export interface Message {

  title: string;
  body: string;
  to: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [
    trigger('messageAnimation', [
      transition('* => fadeOutRight', animate(1000, keyframes(kf.fadeOutRight))),
    ])
  ]
})
export class MessageComponent implements OnInit {

  animationState: string;
  opacity = 0;
  progress = 0;
  show = true;
  @Input() message: Message;
  constructor(private messagingService: MessagingService) { }

  ngOnInit() {

    const timer =  interval(40).pipe(filter(num => num <= 100));

    timer.subscribe((val) => {
      this.progress = val;

      if (val === 100) {
        this.startAnimation('fadeOutRight');
      }
    });
  }

  public startAnimation(state) {
    this.animationState = state;
  }

  public hideAnimation() {

    if (this.animationState === 'fadeOutRight') {
      this.show = false;
    }
    this.animationState = '';
  }
}
