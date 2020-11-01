import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { FilterModel } from '../filters/filter.model';
import { SpacexService } from '../service/spacex.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public filter: FilterModel;
  public items;
  constructor(private spaceXservice: SpacexService, private router: Router, private route: ActivatedRoute, private serializer: UrlSerializer) {
    this.filter = new FilterModel();
  }

  ngOnInit(): void {
    this.getlandingPageItems(this.createQuery(this.filter));
    this.updateUrl(this.filter)
    this.getFilter();
  }


  private getFilter() {
    this.spaceXservice.getMessageForFilter().subscribe(res => {
      this.updateUrl(res.value);
      this.getlandingPageItems(this.createQuery(res.value));
    });
  }

  public getlandingPageItems(params) {
    this.spaceXservice.getAll(params).subscribe((res) => {
      this.items = [...res];
    }, (error) => {
      console.log(error)
    })
  }

  public updateUrl(queryParams) {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge'
      });
  }


  public createQuery(params) {
    let tree = this.router.createUrlTree([], { queryParams: params });
    return this.serializer.serialize(tree);
  }
}
