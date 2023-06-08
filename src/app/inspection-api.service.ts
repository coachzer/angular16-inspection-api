import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7185/api";

  constructor(private http: HttpClient) { }

  // Inspections
  
  getInspectionList(): Observable<any[]> {
    return this.http.get<any[]>(this.inspectionAPIUrl + '/inspections')
  }

  addInspection(data: any) {
    return this.http.post<any>(this.inspectionAPIUrl + '/inspections', data)
  }

  updateInspection(id: number | string, data: any) { 
    return this.http.put<any>(this.inspectionAPIUrl + `/inspections/${id}`, data)
  }

  deleteInspection(id: number | string) {
    return this.http.delete<any>(this.inspectionAPIUrl + `/inspections/${id}`)
  }

  // InspectionsTypes

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any[]>(this.inspectionAPIUrl + '/inspectionTypes')
  }

  addInspectionTypes(data: any) {
    return this.http.post<any>(this.inspectionAPIUrl + '/inspectionTypes', data)
  }

  updateInspectionTypes(id: number | string, data: any) { 
    return this.http.put<any>(this.inspectionAPIUrl + `/inspectionTypes/${id}`, data)
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete<any>(this.inspectionAPIUrl + `/inspectionTypes/${id}`)
  }

  // Statuses

  getStatusnList(): Observable<any[]> {
    return this.http.get<any[]>(this.inspectionAPIUrl + '/status')
  }

  addStatus(data: any) {
    return this.http.post<any>(this.inspectionAPIUrl + '/status', data)
  }

  updateStatus(id: number | string, data: any) { 
    return this.http.put<any>(this.inspectionAPIUrl + `/status/${id}`, data)
  }

  deleteStatus(id: number | string) {
    return this.http.delete<any>(this.inspectionAPIUrl + `/status/${id}`)
  }
}
