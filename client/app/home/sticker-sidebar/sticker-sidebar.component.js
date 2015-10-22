import './sticker-sidebar.css';
import template from './sticker-sidebar.html';
import {StickerSidebarController as controller} from './sticker-sidebar.controller';

let StickerSidebarComponent = function(){
    return {
        template,
        controller,
        restrict: 'E',
        replace: true
    };
};

export {StickerSidebarComponent};