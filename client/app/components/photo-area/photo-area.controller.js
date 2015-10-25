class PhotoAreaController {
    constructor($scope, photoService) {
        this.photoService = photoService;
        this.photoDataUri = photoService.getPhotoDataUri();
        this.stickers = photoService.getStickers();

        $scope.$watch(() => this.photoDataUri, (dataUri) => {
            photoService.updatePhotoDataUri(dataUri);
        });
    }

    startOver() {
        this.photoDataUri = '';
        this.stickers = [];
        this.photoService.clearPhoto();
    }
}

PhotoAreaController.$inject = ['$scope', 'photoService'];

export {PhotoAreaController};