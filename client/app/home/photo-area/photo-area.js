import angular from 'angular';
import {PhotoAreaComponent} from './photo-area.component';

let photoAreaModule = angular.module('photoArea', [])
    .directive('photoArea', PhotoAreaComponent);

export {photoAreaModule};