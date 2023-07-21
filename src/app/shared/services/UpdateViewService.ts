import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UpdateViewService {
  UpdateView:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  CancelPopup:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() { }
}