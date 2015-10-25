import angular from 'angular';
import {PhotoStickerComponent} from './photo-sticker.component';

let photoStickerModule = angular.module('photoSticker', []);

photoStickerModule.directive('photoSticker', PhotoStickerComponent);

export {photoStickerModule};