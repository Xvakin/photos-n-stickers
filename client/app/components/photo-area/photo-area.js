import angular from 'angular';
import {PhotoAreaComponent} from './photo-area.component.js';

let photoAreaModule = angular.module('photoArea', []);

photoAreaModule.directive('photoArea', PhotoAreaComponent);

export {photoAreaModule};