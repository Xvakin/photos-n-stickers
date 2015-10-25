import angular from 'angular';

function stickerLink(scope, element) {
    angular.element(element).on('mousedown', (evt) => {
        scope.stickerCtrl.getClickOffset(evt, element);
    });
}

export {stickerLink};