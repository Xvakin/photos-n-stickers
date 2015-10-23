import angular from 'angular';
import {PhotoAreaComponent} from './photo-area.component';
import {photoModule} from './photo/photo';
import {photoInputModule} from './photo-input/photo-input';

let photoAreaModule = angular.module('photoArea', [
    photoModule.name,
    photoInputModule.name
]);

photoAreaModule.directive('photoArea', PhotoAreaComponent);

export {photoAreaModule};