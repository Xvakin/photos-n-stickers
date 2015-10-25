import './photo-sticker.css';
import template from './photo-sticker.html';
import {photoStickerLink as link} from './photo-sticker.link';
import {PhotoStickerController as controller} from './photo-sticker.controller';

let PhotoStickerComponent = function(){
    return {
        bindToController: true,
        controller,
        controllerAs: 'photoStickerCtrl',
        link,
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template
    };
};

export {PhotoStickerComponent};