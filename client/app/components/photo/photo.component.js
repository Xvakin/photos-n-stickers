import './photo.css';
import template from './photo.html';
import {PhotoController as controller} from './photo.controller';

let PhotoComponent = function(){
    return {
        bindToController: true,
        controller,
        controllerAs: 'photoCtrl',
        replace: true,
        restrict: 'E',
        scope: {
            photoDataUri: '='
        },
        template
    };
};

export {PhotoComponent};