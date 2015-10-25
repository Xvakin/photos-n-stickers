import angular from 'angular';
import {StickersService} from './stickers.service';

let stickersServiceModule = angular.module('stickersService', []);

stickersServiceModule.service('stickersService', StickersService);

export {stickersServiceModule};