import $ from 'jquery';

class PhotoController {
    constructor($element, stickers) {
        this.$element = $element;
        this.stickers = stickers;
        this.photoStickers = stickers.getStickers();
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
        this.stickers.addSticker(newSticker);
    }
}

PhotoController.$inject = ['$element', 'stickers'];

export {PhotoController};