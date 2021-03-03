import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {

  private basePath = '';

  constructor(
    private httpClient: HttpClient,
    environmentService: EnvironmentService
  ) {
    this.basePath = environmentService.currentEnvironment.apiUrl;
  }

  public getLoadsList(query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.basePath}/en/public/loads?${query}`);
  }

}
