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


## Mobile View Portraite
![image](https://user-images.githubusercontent.com/31080020/98221825-23134700-1f76-11eb-97ca-42217ea8e653.png)
![image](https://user-images.githubusercontent.com/31080020/98221906-36bead80-1f76-11eb-981f-0354408e24fd.png)

## For min-width 700px
![image](https://user-images.githubusercontent.com/31080020/98437090-aa42f500-2105-11eb-80d2-e9d9e3c1852c.png)

## For min-width 1024px
![image](https://user-images.githubusercontent.com/31080020/98437126-ea09dc80-2105-11eb-8771-16cbc4adb8ea.png)

## For min-width 1440px
![image](https://user-images.githubusercontent.com/31080020/98437188-4e2ca080-2106-11eb-8548-3abd90e32481.png)

## Approach Used
Application is being rendered server side using Angular Universal. Root app i.e. `app.component.ts` is responsible for loading both the `landing-page` and `Filter` side by side. Filter component emits  the values selected by the user using angular `subscription` which is being listened by landing-page which in turn calls the service and gets the desired data.
Each item of the dataSet is binded to `@Input` of  `item` component which renders card view. Default route is `landing-page`. Url is being updated by using router.
Mobile first approach has been using for styling of the application. `Overflow-y: scroll` is added for item-info as `missionIds` is a list and length of the container will be inconsistent.
Application is deployed on heroku.
url: `https://spacex-amit.herokuapp.com`