# StrengthLab
StrengthLab is an Angular web application for logging weight training. Features that will be included: Log your
own progress, see stats and follow up on workouts, import and start more advanced routines, the ability to 
follow other athletes and their progress, compare stats and comment on workouts. The app will be launched as 
a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) and be platform independent. 
Google Cloud FireStore (currently in a working BETA) is used as database which allows for offline capabilities and
real-time data updates accross devices. This was chosen over Firebase since Firebase only allows for offline data
on mobile devices. 

## Frontend Framework
[Angular Material](https://material.angular.io/) is used for the basic styling, on top of that the layout is to
be decided but most likely it will be FlexLayout which also has official Angular support.  

## Current Status
The Application is in a very early version with only the most basic functionalities implemented.

## Getting started
Clone the repo and run `npm install` with write privileges to install dependencies. To clean up 
and re-install node_modules use `rimraf` followed by `npm install`. 

## Angular Style Guide
There are many ways to write TypeScript for Angular, to keep it simple this project follows the official 
[Angular Style Guide](https://angular.io/guide/styleguide) unless it is not applicable. Best practices for FireStore
are still in development but the official [Cloud FireStore Docs](https://cloud.google.com/firestore/docs/) should
work as a start.  

## Development server
This project was generated with [Angular CLI](https://github.com/angular/angular-cli). 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically
reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
