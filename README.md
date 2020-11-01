# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Mobile View

![image](https://user-images.githubusercontent.com/31080020/97808109-d59f8d00-1c8a-11eb-9276-69928e6aa587.png)

## Desktop View
![image](https://user-images.githubusercontent.com/31080020/97808141-0ed7fd00-1c8b-11eb-8312-70c7bf103acd.png)

## Filters on query params
![image](https://user-images.githubusercontent.com/31080020/97808151-3929ba80-1c8b-11eb-8c2e-0112260a92cf.png)

## Approach Used
Application is being rendered server side using Angular Universal. Root app i.e. `app.component.ts` is responsible for loading both the `landing-page` and `Filter` side by side. Filter component emits  the values selected by the user using angular `subscription` which is received by landing-page which in turn calls the service and gets the desired data.
Each item of the dataSet is binding to `@Input` of  `item` component which renders card view.Deafult route is `landing-page`. Url is being updated by using router.
Mobile first approach has been using for styling of the application. `Overflow-y: scroll` is added for item-info as `missionIds` is a list and length of the container will be inconsistent.