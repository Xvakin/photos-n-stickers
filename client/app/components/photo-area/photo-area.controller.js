class PhotoAreaController {
    constructor($scope, photoService) {
        this.photoService = photoService;
        this.init();

        $scope.$watch(() => this.photoDataUri, (dataUri) => {
            photoService.updatePhotoDataUri(dataUri);
        });
    }

    init() {
        this.photoDataUri = this.photoService.getPhotoDataUri();
        this.stickers = this.photoService.getStickers();
    }

    startOver() {
        this.photoService.clearPhoto();
        this.init()
    }
}

PhotoAreaController.$inject = ['$scope', 'photoService'];

export {PhotoAreaController};