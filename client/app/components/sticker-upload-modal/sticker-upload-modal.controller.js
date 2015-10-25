class StickerUploadModalController {
    constructor($uibModalInstance, stickersService) {
        this.$uibModalInstance = $uibModalInstance;
        this.stickersService = stickersService;
        this.newStickerForm = {};
        this.newStickerName = '';
        this.newStickerFile = '';
    }

    submitNewStickerForm() {
        this.stickersService.addSticker({
            name: this.newStickerName,
            file: this.newStickerFile
        });
        this.$uibModalInstance.close();
    }

    isSubmitDisabled() {
        return this.newStickerForm.$invalid;
    }

    close() {
        this.$uibModalInstance.dismiss();
    }
}

StickerUploadModalController.$inject = ['$uibModalInstance', 'stickersService'];

export {StickerUploadModalController};