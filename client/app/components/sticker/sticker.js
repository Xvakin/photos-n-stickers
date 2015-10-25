import angular from 'angular';
import {StickerComponent} from './sticker.component.js';

let stickerModule = angular.module('sticker', []);

stickerModule.directive('sticker', StickerComponent);

export {stickerModule};