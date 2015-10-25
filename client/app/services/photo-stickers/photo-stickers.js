import angular from 'angular';
import {PhotoStickersService} from './photo-stickers.service';

let photoStickersServiceModule = angular.module('photoStickers', []);

photoStickersServiceModule.service('photoStickers', PhotoStickersService);

export {photoStickersServiceModule};