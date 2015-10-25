import angular from 'angular';
import {PhotoService} from './photo.service';

let photoServiceModule = angular.module('photoService', []);

photoServiceModule.service('photoService', PhotoService);

export {photoServiceModule};