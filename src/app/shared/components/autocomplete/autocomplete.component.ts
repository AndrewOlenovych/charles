import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { AutocompleteSources } from '../../models/autocomplete-sources';
import { AutocompleteService } from '../../services/autocomplete.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  public myControl = new FormControl();
  public filteredOptions: Observable<string[]>;

  public options: AutocompleteSources;

  constructor(private autocompleteService: AutocompleteService) { }

  public ngOnInit(): void {
    this.options = this.autocompleteService.getAutocompleteSources();

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.options.vegetables.slice())
      );
  }

  public displayFn(option: string): string {
    return option ? option : '';
  }
  
  private filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.options.vegetables.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
