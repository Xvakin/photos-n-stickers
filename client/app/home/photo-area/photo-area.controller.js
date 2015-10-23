class PhotoAreaController {
    constructor($scope) {
        this.photoDataURI = '';
    }

    startOver() {
        this.photoDataURI = '';
    }
}

PhotoAreaController.$inject = ['$scope'];

export {PhotoAreaController};