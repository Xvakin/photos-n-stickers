import stickerUploadModalTemplate from '../sticker-upload-modal/sticker-upload-modal.html';
import {StickerUploadModalController} from '../sticker-upload-modal/sticker-upload-modal.controller';

class StickerSidebarController {
    constructor($uibModal, stickersService) {
        this.$uibModal = $uibModal;
        this.stickers = stickersService.getStickers();
    }

    showModal() {
        let modalInstance = this.$uibModal.open({
            bindToController: true,
            controller: StickerUploadModalController,
            controllerAs: 'stickerUploadModalCtrl',
            template: stickerUploadModalTemplate
        });

        modalInstance.result.then(function () {

        });
    }
}

StickerSidebarController.$inject = ['$uibModal', 'stickersService'];

export {StickerSidebarController};