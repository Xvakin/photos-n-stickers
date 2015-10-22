import angular from 'angular';
import {HomeComponent} from './home.component';
import {photoAreaModule} from './photo-area/photo-area';
import {stickerSidebarModule} from './sticker-sidebar/sticker-sidebar';

let homeModule = angular.module('home', [
    photoAreaModule.name,
    stickerSidebarModule.name
]);

homeModule.directive('home', HomeComponent);

export {homeModule};