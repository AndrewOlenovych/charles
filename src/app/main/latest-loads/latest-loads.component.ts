import { Component, OnInit } from '@angular/core';

import { LoadsService } from './services/loads-list.service';

import queryConfig from '../../core/configs/query-config';

@Component({
  selector: 'app-latest-loads',
  templateUrl: './latest-loads.component.html',
  styleUrls: ['./latest-loads.component.scss']
})
export class LatestLoadsComponent implements OnInit {

  private latestLoadsQuery: string;
  public dataLoads: any[];

  constructor(private loadsService: LoadsService) {
    this.latestLoadsQuery = queryConfig.latestLoads;
  }

  public ngOnInit(): void {
    this.loadsService.getLoadsList(this.latestLoadsQuery).subscribe(({data}) => this.dataLoads = data);
  }

}
