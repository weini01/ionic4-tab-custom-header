import { Component, ViewChild, Input, Output, NgZone, EventEmitter } from "@angular/core";

@Component({
  selector: "ca-header",
  template: `
    <ion-header class="sell">

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button *ngIf="backButton && !defaultHref" class="nav-header-back-button"></ion-back-button>
          <ion-back-button *ngIf="backButton && defaultHref" class="nav-header-back-button" [defaultHref]="defaultHref"></ion-back-button>

          <ion-button *ngIf="leftButton" color="sell" class="done-button" (click)="leftButtonClick.emit(leftButton)">{{leftButton}}</ion-button>
        </ion-buttons>
        <ion-title *ngIf="smallHeader">{{title}}</ion-title>
        <ion-buttons slot="end">
          <ion-button *ngIf="rightButton" color="sell" class="done-button" (click)="rightButtonClick.emit(rightButton)">{{rightButton}}</ion-button>
        </ion-buttons>
      </ion-toolbar>

    </ion-header>
    <ion-content class="page-content outer-content list-content"  [scrollEvents]="true" [fullscreen]="true" (ionScroll)="onScroll($event)" >

      <ion-toolbar #toolbar class="toolbar-scroll">
        <div *ngIf="!isSearching">
          <h1 class="header-text d-flex justify-content-between">{{title}}</h1>
          <span class="text-font-very-light-gray">{{description}}</span>
        </div>
      </ion-toolbar>

        <ng-content></ng-content>
      </ion-content>
  `,
  styles: [`
    .page-content {
      height: calc(100% - 44px);
    }
    :host-context(.can-go-back > ion-header), :host(.show-back-button) {
      display: block;
    }
    ion-header {
      z-index: 11;
    }
  `]
})
export class NavHeaderComponent {

  public loading: boolean;
  @Input() title: string;
  @Input() description: string;
  @Input() leftButton: string;
  @Input() rightButton: string;
  @Input() backButton: boolean = true;
  @Input() defaultHref: string;

  @Output() leftButtonClick = new EventEmitter<string>();
  @Output() rightButtonClick = new EventEmitter<string>();
  // @ViewChild('toolbar', { read: ElementRef }) toolbarElem: ElementRef;
  smallHeader: boolean;
  constructor(private _zone: NgZone) {
    // if (this.defaultHref) {
    //   logger.client(this.defaultHref);
    // }
  }

  // ngOnChanges(event) {
  //   logger.client(event);
  //   logger.client(this.defaultHref);
  // }

  onScroll(event: any) {
    let scrollOffset = event.detail.currentY;
    //scrollOffset = this._html.getBodyScrollTop();
    // console.log(scrollOffset);

    if (scrollOffset >= 35 && !this.smallHeader) {
      this._zone.run(() => {
        this.smallHeader = true;
      });
    }
    else if (scrollOffset < 35 && this.smallHeader) {
      this._zone.run(() => {
        this.smallHeader = false;
      });
    }
  }


}
