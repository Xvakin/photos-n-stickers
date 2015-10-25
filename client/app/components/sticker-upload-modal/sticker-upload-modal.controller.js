class StickerUploadModalController {
    constructor($uibModalInstance) {
        this.$uibModalInstance = $uibModalInstance;
        this.newStickerForm = {};
        this.newStickerName = '';
    }

    ok() {
        console.log('ok');
        this.$uibModalInstance.close();
    }

    isSubmitDisabled() {
        return this.newStickerForm.$invalid;
    }

    close() {
        this.$uibModalInstance.dismiss();
    }
}

StickerUploadModalController.$inject = ['$uibModalInstance'];

export {StickerUploadModalController};