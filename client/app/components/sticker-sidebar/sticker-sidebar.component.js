import './sticker-sidebar.css';
import template from './sticker-sidebar.html';
import {StickerSidebarController as controller} from './sticker-sidebar.controller';

let StickerSidebarComponent = function(){
    return {
        controller,
        controllerAs: 'stickerSidebarCtrl',
        restrict: 'E',
        replace: true,
        template
    };
};

export {StickerSidebarComponent};