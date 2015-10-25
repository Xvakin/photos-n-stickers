import angular from 'angular';
import {InputFileComponent} from './input-file.component.js';

let inputFileModule = angular.module('inputFile', []);

inputFileModule.directive('inputFile', InputFileComponent);

export {inputFileModule};