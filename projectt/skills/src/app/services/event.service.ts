import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private localStorageKey = 'events';

  constructor() {}

  getAllEvents(): any[] {
    try {
      const eventsString = localStorage.getItem(this.localStorageKey);
      if (eventsString) {
        return JSON.parse(eventsString);
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error while retrieving events:', error);
      return [];
    }
  }

  saveEvents(events: any[]): void {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(events));
    } catch (error) {
      console.error('Error while saving events:', error);
    }
  }

  addEvent(eventData: any): void {
    try {
      const events = this.getAllEvents();
      const event = { ...eventData }; // Copy eventData to avoid modifying the original object
      event.id = this.generateId(); // Generate a unique ID for the event
      events.push(event); // Push the event to the events array
      this.saveEvents(events); // Save the events array
    } catch (error) {
      console.error('Error while adding event:', error);
    }
  }

  updateEvent(updatedEvent: any): void {
    try {
      const events = this.getAllEvents();
      const index = events.findIndex(event => event.id === updatedEvent.id);
      if (index !== -1) {
        events[index] = updatedEvent;
        this.saveEvents(events);
      }
    } catch (error) {
      console.error('Error while updating event:', error);
    }
  }

  deleteEvent(eventId: string): void {
    try {
      let events = this.getAllEvents();
      events = events.filter(event => event.id !== eventId);
      this.saveEvents(events);
    } catch (error) {
      console.error('Error while deleting event:', error);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Generate random ID
  }
}
