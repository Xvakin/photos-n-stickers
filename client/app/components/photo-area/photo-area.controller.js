class PhotoAreaController {
    constructor($scope) {
        this.photoDataUri = 'qweqwe';
    }

    startOver() {
        this.photoDataUri = '';
    }
}

PhotoAreaController.$inject = ['$scope'];

export {PhotoAreaController};