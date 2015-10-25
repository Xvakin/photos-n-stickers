class PhotoInputController {
    constructor($scope) {
        this.$scope = $scope;
    }

    handlePhotoUpload(evt) {
        var files = evt.target.files;
        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            var reader = new FileReader();
            reader.onload = ((file) => {
                return (e) => {
                    this.photoDataUri = e.target.result;
                    this.$scope.$apply();
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }
}

PhotoInputController.$inject = ['$scope'];

export {PhotoInputController};