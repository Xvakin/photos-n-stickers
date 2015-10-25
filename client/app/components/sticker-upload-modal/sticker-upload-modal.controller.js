class StickerUploadModalController {
    constructor($uibModalInstance) {
        this.$uibModalInstance = $uibModalInstance;
        console.log(this);  
    }

    ok() {
        console.log('ok');
        this.$uibModalInstance.close();
    }

    cancel() {
        console.log('ok');
        this.$uibModalInstance.dismiss();
    }
}

StickerUploadModalController.$inject = ['$uibModalInstance'];

export {StickerUploadModalController};