import $ from 'jquery';

class PhotoStickerController {
    constructor($scope) {
        this.$scope = $scope;
    }

    getClickOffset(evt, element) {
        var el = $(element);
        this.data.mouseX = evt.clientX - el.offset().left;
        this.data.mouseY = evt.clientY - el.offset().top;
        this.$scope.$apply();
    }
}

PhotoStickerController.$inject = ['$scope'];

export {PhotoStickerController};