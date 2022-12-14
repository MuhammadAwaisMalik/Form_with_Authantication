import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events = [
    {
      name: '',
      description: '',
      date: '',
    },
  ];

  constructor(private _event: EventService) {}

  ngOnInit() {
    this._event.getEvents().subscribe(
      (res) => {
        this.events = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
