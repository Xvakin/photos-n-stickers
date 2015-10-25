import angular from 'angular';
import {StickersService} from './stickers.service';

let stickersServiceModule = angular.module('stickers', []);

stickersServiceModule.service('stickers', StickersService);

export {stickersServiceModule};