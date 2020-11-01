import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../service/spacex.service';

import { FilterModel, LaunchStatus, LaunchYear } from './filter.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  public launchYear: LaunchYear[] = [

    {
      displayText: '2006',
      value: 2006
    },
    {
      displayText: '2007',
      value: 2007
    },
    {
      displayText: '2008',
      value: 2008
    },
    {
      displayText: '2009',
      value: 2009
    },
    {
      displayText: '2010',
      value: 2010
    },
    {
      displayText: '2011',
      value: 2011
    },
    {
      displayText: '2012',
      value: 2012
    },
    {
      displayText: '2013',
      value: 2013
    },
    {
      displayText: '2014',
      value: 2014
    },
    {
      displayText: '2015',
      value: 2015
    },
    {
      displayText: '2016',
      value: 2016
    },
    {
      displayText: '2017',
      value: 2017
    },
    {
      displayText: '2018',
      value: 2018
    },
    {
      displayText: '2019',
      value: 2019
    },
    {
      displayText: '2020',
      value: 2020
    }


  ];



  public launchSuccess: LaunchStatus[] = [{
    displayText: 'True',
    value: true
  }, {
    displayText: 'False',
    value: false
  }];


  public landingSuccess: LaunchStatus[] = [{
    displayText: 'True',
    value: true
  }, {
    displayText: 'False',
    value: false
  }];


  public selectedIndex: number;
  public selectedlaunchIndex: number;
  public selectedLandIndex: number;
  public filterModel: FilterModel;
  constructor(private spacexService: SpacexService) {
    this.filterModel = new FilterModel();
  }

  ngOnInit(): void {
  }

  public onYearFilter(val, index): void {
    this.selectedIndex = this.getSelectedIndex(index, this.selectedIndex);
    this.filterModel.launch_year = this.selectedIndex !== -1 ? val : '';
    this.spacexService.setMessageForFilter(this.filterModel);
  }


  onlaunchSuccessFilter(val, iLaunchSuccess): void {
    this.selectedlaunchIndex = this.getSelectedIndex(iLaunchSuccess, this.selectedlaunchIndex);
    this.filterModel.launch_success = this.selectedlaunchIndex !== -1 ? val : '';
    this.spacexService.setMessageForFilter(this.filterModel);
  }

  onlandSuccessFilter(val, iLandSuccess): void {
    this.selectedLandIndex = this.getSelectedIndex(iLandSuccess, this.selectedLandIndex);
    this.filterModel.land_success = this.selectedLandIndex !== -1 ? val : '';
    this.spacexService.setMessageForFilter(this.filterModel);
  }


  getSelectedIndex(currentIndex, prevIndex): number {
    if (currentIndex !== prevIndex) {
      return currentIndex;
    }
    else {
      return -1;
    }

  }

}
