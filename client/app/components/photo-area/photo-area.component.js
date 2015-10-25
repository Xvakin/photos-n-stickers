import './photo-area.css';
import template from './photo-area.html';
import {PhotoAreaController as controller} from './photo-area.controller';

let PhotoAreaComponent = function(){
    return {
        controller,
        controllerAs: 'photoAreaCtrl',
        restrict: 'E',
        replace: true,
        template
    };
};

export {PhotoAreaComponent};