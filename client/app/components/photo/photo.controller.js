import $ from 'jquery';

class PhotoController {
    constructor($element, photoService) {
        this.$element = $element;
        this.photoService = photoService;
    }

    onDrop(data, event) {
        this.addSticker(data, event);
    }

    addSticker(data, event) {
        let newSticker = data['json/sticker']['data'];
        const el = $(this.$element);
        const elOffsetX = event.clientX - el.offset().left;
        const elOffsetY = event.clientY - el.offset().top;
        newSticker.left = elOffsetX - newSticker.mouseX + 'px';
        newSticker.top = elOffsetY - newSticker.mouseY + 'px';
        newSticker.isAdded = true;
        this.photoService.addSticker(newSticker);
    }
}

PhotoController.$inject = ['$element', 'photoService'];

export {PhotoController};