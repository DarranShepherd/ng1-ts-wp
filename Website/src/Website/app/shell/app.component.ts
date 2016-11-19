import "angular";

class AppComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.controller = AppComponentController;
        this.template =  require('./app.component.html');
    }
}

class AppComponentController {
    public message: string;
    constructor() {
       this.message = 'This is a message from the App Component controller';
    }
}

angular.module('app.shell').component('app', new AppComponent());