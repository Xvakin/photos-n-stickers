import angular from 'angular';

function photoInputLink(scope, element) {
    angular.element(element).find('input').on('change', (evt) => {
        scope.photoInputCtrl.handlePhotoUpload(evt);
    });
}

export {photoInputLink};