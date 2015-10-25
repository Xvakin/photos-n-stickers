import angular from 'angular';

function photoStickerLink(scope, element) {
    angular.element(element).on('mousedown', (evt) => {
        scope.photoStickerCtrl.getClickOffset(evt, element);
    });
}

export {photoStickerLink};