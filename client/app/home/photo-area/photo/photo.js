import angular from 'angular';
import {PhotoComponent} from './photo.component';

let photoModule = angular.module('photo', []);

photoModule.directive('photo', PhotoComponent);

export {photoModule};