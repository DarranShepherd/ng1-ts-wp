import "angular";

class BarComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;

    constructor() {
        this.controller = BarComponentController;
        this.template = require('./bar.component.html');
    }
}

class BarComponentController {
    public message: string;
    constructor() {
        this.message = 'This is a message from the Bar Component controller';
    }
}

angular.module('foo').component('bar', new BarComponent());