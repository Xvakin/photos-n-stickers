import './home.css';
import template from './home.html';
import {HomeController as controller} from './home.controller';

let HomeComponent = function(){
    return {
        controller,
        controllerAs: 'homeCtrl',
        restrict: 'E',
        replace: true,
        template
    };
};

export {HomeComponent};