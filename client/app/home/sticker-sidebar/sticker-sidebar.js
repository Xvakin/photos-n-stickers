import angular from 'angular';
import {StickerSidebarComponent} from './sticker-sidebar.component';

let stickerSidebarModule = angular.module('stickerSidebar', []);

stickerSidebarModule.directive('stickerSidebar', StickerSidebarComponent);

export {stickerSidebarModule};