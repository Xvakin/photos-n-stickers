import './sticker.css';
import template from './sticker.html';
import {stickerLink as link} from './sticker.link';
import {StickerController as controller} from './sticker.controller';

let StickerComponent = function(){
    return {
        bindToController: true,
        controller,
        controllerAs: 'stickerCtrl',
        link,
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template
    };
};

export {StickerComponent};