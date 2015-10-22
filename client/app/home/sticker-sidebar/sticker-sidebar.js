import angular from 'angular';
import {StickerSidebarComponent} from './sticker-sidebar.component';

let stickerSidebarModule = angular.module('stickerSidebar', [])
    .directive('stickerSidebar', StickerSidebarComponent);

export {stickerSidebarModule};