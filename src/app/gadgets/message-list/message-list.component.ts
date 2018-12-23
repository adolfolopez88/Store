import { trigger, transition, query, stagger, style, animate, keyframes} from '@angular/animations';
import * as kf from '../../models/keyframes';
import { Component, OnInit } from '@angular/core';
import { MessagingService, Message} from '../../services/messaging.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true}),
        query(':enter', stagger('3000ms', [
          animate ('1s ease-in', keyframes(kf.messageAnimation)),
        ]), {optional: true } )
      ])
    ])
  ]
})
export class MessageListComponent implements OnInit {

  animationState = '';
  messages: Message[] = [];
  constructor(private messagingService: MessagingService) {
  }

  startAnimation(state: string) {
    this.animationState = 'listIn';
  }

  ngOnInit() {
    this.startAnimation('listIn');

    this.messagingService.currentMessage.pipe(delay(500)).subscribe((message) => {
      this.messages.push(message);
    });
  }

}
