import angular from 'angular';
import {PhotoInputComponent} from './photo-input.component.js';

let photoInputModule = angular.module('photoInput', []);

photoInputModule.directive('photoInput', PhotoInputComponent);

export {photoInputModule};