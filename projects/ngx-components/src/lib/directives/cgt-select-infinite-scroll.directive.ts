import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {MatSelect, SELECT_ITEM_HEIGHT_EM} from '@angular/material';
import {fromEvent, Subscription} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Directive({
  selector: '[cgtSelectInfiniteScroll]'
})
export class CgtSelectInfiniteScrollDirective implements AfterViewInit, OnDestroy {
  private _subscribed = true;
  private _threshold = '15%';
  private _thresholdPixels = 0;
  private _thresholdPercent = 0;

  private _scrollSubscription: Subscription;

  @Input() public complete = false;

  @Input()
  public get threshold(): string {
    return this._threshold;
  }

  public set threshold(val: string) {
    this._threshold = val;
    this.evaluateThreshold();
  }

  @Output() public scrollDown = new EventEmitter<void >();

  constructor(private _element: ElementRef, private _matSelect: MatSelect) { }

  public ngAfterViewInit(): void {
    if (this._matSelect) {
      this._matSelect.openedChange.subscribe((opened) => {
        if (opened) {
          this.registerScrollListener();
        }
      });
    }
  }

  public ngOnDestroy(): void {
    if (this._scrollSubscription && this._scrollSubscription.unsubscribe) {
      this._scrollSubscription.unsubscribe();
    }

    this._subscribed = false;
  }

  private evaluateThreshold(): void {
    if (this._threshold.lastIndexOf('%') > -1) {
      this._thresholdPixels = 0;
      this._thresholdPercent = (parseFloat(this._threshold) / 100);

    } else {
      this._thresholdPixels = parseFloat(this._threshold);
      this._thresholdPercent = 0;
    }
  }

  private registerScrollListener() {
    if (!this._scrollSubscription) {
      this._scrollSubscription = fromEvent(this.panel, 'scroll')
        .pipe(
          takeWhile(() => this._subscribed),
          tap((event) => this.handleScrollEvent(event))
        ).subscribe();
    }
  }

  private handleScrollEvent(event): void {
    if (this.complete) {
      return;
    }

    const singleOptionHeight     = this.getSelectItemHeightPx();
    const countOfRenderedOptions = this._matSelect.options.length;
    const infiniteScrollDistance = singleOptionHeight * countOfRenderedOptions;

    const threshold = this._thresholdPercent !== 0 ? (infiniteScrollDistance * this._thresholdPercent) : this._thresholdPixels;
    const scrolledDistance = this.panel.clientHeight + event.target.scrollTop;

    if ((scrolledDistance + threshold) >= infiniteScrollDistance) {
      this.scrollDown.emit();
    }
  }

  private get panel(): any {
    return this._matSelect.panel.nativeElement;
  }

  private getSelectItemHeightPx(): number {
    return parseFloat(getComputedStyle(this.panel).fontSize) * SELECT_ITEM_HEIGHT_EM;
  }
}
