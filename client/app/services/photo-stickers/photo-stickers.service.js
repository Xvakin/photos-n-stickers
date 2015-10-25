let PhotoStickersService = () => {
    let stickers = [];

    let getStickers = () => {
        return stickers;
    };

    let addSticker = (stickerData) => {
        stickers.push(stickerData);
    };

    return {
        addSticker,
        getStickers
    };
};

export {PhotoStickersService};