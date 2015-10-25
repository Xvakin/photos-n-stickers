let StickersService = (localStorageService) => {
    let stickers = localStorageService.get('stickers') || [];

    let getStickers = () => {
        return stickers;
    };

    let addSticker = (stickerData) => {
        stickers.push(stickerData);
        localStorageService.set('stickers', stickers);
    };

    return {
        addSticker,
        getStickers
    };
};

StickersService.$inject = ['localStorageService'];

export {StickersService};