import angular from 'angular';
import {PhotoComponent} from './photo.component.js';

let photoModule = angular.module('photo', []);

photoModule.directive('photo', PhotoComponent);

export {photoModule};