import { Injectable } from '@angular/core';

import { AutocompleteSources } from '../models/autocomplete-sources';

import sources from '../../core/configs/autocomplete-sources';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor() { }

  public getAutocompleteSources(): AutocompleteSources {
    return sources;
  }
}
