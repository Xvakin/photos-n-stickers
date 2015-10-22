import './photo-area.css';
import template from './photo-area.html';
import {PhotoAreaController as controller} from './photo-area.controller';

let PhotoAreaComponent = function(){
    return {
        template,
        controller,
        restrict: 'E',
        replace: true
    };
};

export {PhotoAreaComponent};