import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LayerListService } from '@tamu-gisc/maps/feature/layer-list';

@Component({
  selector: 'tamu-gisc-date-picker',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRange implements OnInit {
  public dateTimeRange: Date[];

  constructor(private layerListService: LayerListService) {}
  //constructor() {}

  public ngOnInit() {
    // Default Dates = last 24h to now
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    this.dateTimeRange = [yesterday, new Date()];
  }

  // Called when datePicker is closed
  // Sends the dates to the layer service
  public newDate() {
    this.layerListService.changeDate(this.dateTimeRange);
  }
}
