import { Component } from '@angular/core';
import moment from 'moment';
import { DaterangepickerConfig } from "../../projects/ng2-daterangepicker/src/public-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';

  public chosenDate: any = {
    start: moment(),
    end: moment()
  };

  public options = {
    opens: 'right',
    startDate: this.chosenDate.start,
    endDate: this.chosenDate.end,
    isInvalidDate: function (date: any) {
      if (date.isSame('2017-09-26', 'day'))
        return 'mystyle';
      return false;
    },
    emitChangeOnSameDate: true,
    disableInput: true
  }


  public singleDatepicker = {
    singleDatePicker: true,
    opens: 'center',
    autoPosition: true,
    ranges: {}
  }

  public singleDate: any = {
    start: moment()
  };

  constructor(private daterangepickerOptions: DaterangepickerConfig) {
    // this.daterangepickerOptions.settings = {
    //   locale: { format: 'YYYY-MM-DD' },
    //   alwaysShowCalendars: false,
    //   "opens": "right",
    //   ranges: {
    //     'Last Month': [moment().subtract(1, 'month'), moment()],
    //     'Last 3 Months': [moment().subtract(4, 'month'), moment()],
    //     'Last 6 Months': [moment().subtract(6, 'month'), moment()],
    //     'Last 12 Months': [moment().subtract(12, 'month'), moment()],
    //     'Last 4 Months': [moment().subtract(5, 'month'), moment()],
    //   }
    // };

    console.log(this.chosenDate)
  }

  public selectedDate(value: any, dateInput: any): void {
    console.log(value);
    console.log(dateInput)
    dateInput.start = value.start;
    dateInput.end = value.end;
  }

  public calendarEventsHandler(e: any): void {
    console.log({ calendarEvents: e });
  }

  public applyDatepicker(e: any) {
    console.log({ applyDatepicker: e });
  }

  public updateSettings(): void {
    this.daterangepickerOptions.settings.locale = { format: 'YYYY/MM/DD' };
    this.daterangepickerOptions.settings.ranges = {
      'Last 7 Days': [moment().subtract(2, 'week'), moment()],
      '30 days ago': [moment().subtract(1, 'month'), moment()],
      '3 months ago': [moment().subtract(4, 'month'), moment()],
      '6 months ago': [moment().subtract(6, 'month'), moment()],
      '12 months ago': [moment().subtract(12, 'month'), moment()],
    };
  }
}
