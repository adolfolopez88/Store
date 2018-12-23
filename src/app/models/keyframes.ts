import { keyframes, style } from '@angular/animations';

/** atention sekers */
export const  flash = [
  style({ opacity: 1, offset: 0 }),
  style({ opacity: 0, offset: 0.25 }),
  style({ opacity: 1, offset: 0.5 }),
  style({ opacity: 0, offset: 0.75 }),
  style({ opacity: 1, offset: 1 })
];

export const swing = [
  style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
  style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
  style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
  style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
  style({ transform: 'none', offset: 1 })
];

export const bounceIn = [
  style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity: 0, offset: 0 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: .2 }),
  style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: .4 }),
  style({ transform: 'scale3d(1.03, 1.03, 1.03)',  opacity: 1, offset: .6 }),
  style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: .8 }),
  style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
];

export const bounceInUp = [
  style({ transform: 'translate3d(0, 3000px, 0)', opacity: 0, offset: 0 }),
  style({ transform: 'translate3d(0, -20px, 0)', opacity: 1, offset: .6 }),
  style({ transform: 'translate3d(0, 10px, 0)', offset: .75 }),
  style({ transform: 'translate3d(0, -5px, 0)',  offset: .9 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];

export const bounceOutDown = [
  style({ transform: 'translate3d(0, 10px, 0)', offset: .2 }),
  style({ transform: 'translate3d(0, -20px, 0)', opacity: 1, offset: .4 }),
  style({ transform: 'translate3d(0, -20px, 0)',  offset: .45 }),
  style({ transform: 'translate3d(0, 2000px, 0)', opacity: 0, offset: 1 })
];

export const fadeInRight = [
  style({ opacity: 0, transform: 'translate3d(100% , 0, 0)' }),
  style({ opacity: 1, transform: 'translate3d(0, 0, 0)'})
];

export const fadeOutRight = [
  style({ opacity: 1, offset: 0 }),
  style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
];

export const moveDown = [
  style({opacity: 1, transform: 'translateY(0px)', offset: 0 }),
  style({opacity: 1, transform: 'translateY(100px)', offset: 1 }),
];

export const messageAnimation = [
  style({ opacity: 0, transform: 'translate3d(100% , 0, 0)', offset: 0 }),
  style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
];


export const ZoomIn = [
  style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3', offset: 0 }),
  style({ opacity: .5, transform: 'scale3d(0.5, 0.5, 0.5', offset: .5 }),
  style({ opacity: .8, transform: 'scale3d(0.6, 0.6, 0.6', offset: .8 }),
  style({ opacity: 1, transform: 'scale3d(0.9, 0.9, 0.9', offset: .8 }),
  style({ opacity: 1, offset: 1 }),
];



export function setTraslation(from, to) {

}
