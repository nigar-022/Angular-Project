import { Component } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'Hillen Hotel';

  noOfRooms = 50;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRoom: 5,
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
