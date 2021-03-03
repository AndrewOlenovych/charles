import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DynamicEnvironmentModel, EnvironmentModel } from '../models';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {

    private _currentEnvironment$: BehaviorSubject<EnvironmentModel> = new BehaviorSubject(this.dafaultValue);

    constructor(
        private http: HttpClient) {
    }

    public get currentEnvironment(): EnvironmentModel {
        return this._currentEnvironment$.value;
    }

    private get dafaultValue(): EnvironmentModel {
        return { production: false, apiUrl: '' };
    }

    public get currentEnvironment$(): Observable<EnvironmentModel> {
        if (this.currentEnvironment.apiUrl !== '') {
            return this.asObservable(this._currentEnvironment$);
        } else {
            // todo: add error handler
            return this.environment().pipe(mergeMap(response => {
                const _environment = Object.assign(environment, response);
                this._currentEnvironment$.next(_environment);
                return this.asObservable(this._currentEnvironment$);
            }));
        }
    }

    private asObservable(subject: BehaviorSubject<any>): Observable<any> {
        return new Observable(fn => subject.subscribe(fn));
    }

    private environment(): Observable<DynamicEnvironmentModel> {
        return this.http.get<DynamicEnvironmentModel>('/assets/env.json');
    }
}
