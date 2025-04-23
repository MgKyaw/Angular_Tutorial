import { Injectable } from '@angular/core';
import { DataproviderService } from '../dataprovider.service'; // Make sure to import the service

@Injectable({
  providedIn: 'root'
})
export class AnotherService {
  constructor(private dataproviderService: DataproviderService) {}

  getAnotherData() {
    return this.dataproviderService.getData();
  }
}