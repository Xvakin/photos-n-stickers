class StickerUploadModalController {
    constructor($uibModalInstance, stickers) {
        this.$uibModalInstance = $uibModalInstance;
        this.stickers = stickers;
        this.newStickerForm = {};
        this.newStickerName = '';
        this.newStickerFile = '';
    }

    submitNewStickerForm() {
        this.stickers.addSticker({
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

StickerUploadModalController.$inject = ['$uibModalInstance', 'stickers'];

export {StickerUploadModalController};