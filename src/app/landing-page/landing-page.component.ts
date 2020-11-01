import { Component, OnInit } from '@angular/core';
import { FilterModel } from '../filters/filter.model';
import { SpacexService } from '../service/spacex.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public filter: FilterModel;
  public items;
  constructor(
    private location: Location,
    private spaceXservice: SpacexService) {
    this.filter = new FilterModel();
  }

  ngOnInit(): void {
    this.getlandingPageItems(this.createQuery(this.filter));
    this.updateUrl(this.createQuery(this.filter));
    this.getFilter();
  }


  private getFilter(): void {
    this.spaceXservice.getMessageForFilter().subscribe(res => {
      this.updateUrl(this.createQuery(res.value));
      this.getlandingPageItems(this.createQuery(res.value));
    });
  }

  public getlandingPageItems(params): void {
    this.spaceXservice.getAll(params).subscribe((res) => {
      this.items = [...res];
    }, (error) => {
      console.log(error);
    });
  }

  public updateUrl(queryParams): void {
    this.location.replaceState(queryParams);
  }

  public createQuery(params): string {
    return this.createUri(params);
  }


  private getQuery(val): string {
    let txt = '';
    val.split('').forEach((element, index) => {
      if (element === element.toUpperCase()) {
        if (index !== 0) {
          element = '_' + element.toLowerCase();
        }
      }

      txt += element;
    });
    return txt;
  }


  createUri(params): string {
    let uri = '/?';
    for (const param in Object.keys(params)) {
      uri += this.getQuery(param) + '=' + params[param] + '&';
    }
    return uri.substring(0, uri.length - 1);
  }
}
