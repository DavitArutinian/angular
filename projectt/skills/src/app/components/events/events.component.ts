import { Component, OnInit } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { EventService } from '../../services/event.service';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  newEvent: any = {};
  isEditing = false;
  editedEventIndex: number | null = null;
  selectedFile: File | undefined;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.events = this.eventService.getAllEvents();
  }

  addEvent(): void {
    if (this.selectedFile) {
      // Set the image URL in the newEvent object
      this.newEvent.imageUrl = URL.createObjectURL(this.selectedFile);
    }
    // Add the event with its associated data
    this.eventService.addEvent(this.newEvent);
    // Reset the newEvent object and selected file
    this.newEvent = {};
    this.selectedFile = undefined;
    // Refresh the events list
    this.getEvents();
  }
  saveEditedEvent(): void {
    if (this.selectedFile) {
      // If a file is selected, set it in the edited event object
      this.newEvent.image = this.selectedFile;
    }
    // Update the event with its associated data
    this.eventService.updateEvent(this.newEvent);
    // Reset the editing state, edited event index, new event object, and selected file
    this.isEditing = false;
    this.editedEventIndex = null;
    this.newEvent = {};
    this.selectedFile = undefined;
    // Refresh the events list
    this.getEvents();
  }

  editEvent(eventIndex: number): void {
    this.isEditing = true;
    this.editedEventIndex = eventIndex;
    this.newEvent = { ...this.events[eventIndex] };
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedEventIndex = null;
    this.newEvent = {}; 
  }

  deleteEvent(eventId: string): void {
    this.eventService.deleteEvent(eventId);
    this.getEvents(); 
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newEvent.imageUrl = e?.target?.result as string; 
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}