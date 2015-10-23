import './photo-input.css';
import template from './photo-input.html';
import {PhotoInputController as controller} from './photo-input.controller';
import {photoInputLink as link} from './photo-input.link';

let PhotoInputComponent = function(){
    return {
        bindToController: true,
        controller,
        controllerAs: 'photoInputCtrl',
        link,
        replace: true,
        restrict: 'E',
        scope: {
            photoDataUri: '='
        },
        template
    };
};

export {PhotoInputComponent};