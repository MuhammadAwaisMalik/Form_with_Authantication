import { HttpErrorResponse } from '@angular/common/http';
import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvent = [
    {
      name: '',
      description: '',
      date: '',
    },
  ];

  constructor(private _event: EventService, private _route: Router) {}

  ngOnInit() {
    this._event.getSpecialEvents().subscribe(
      (res) => (this.specialEvent = res),
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._route.navigate(['/login']);
          }
        }
      }
    );
  }
}
