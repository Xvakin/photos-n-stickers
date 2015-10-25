let PhotoService = (localStorageService) => {
    let photoDataUri = localStorageService.get('photoDataUri') || '';
    let stickers = localStorageService.get('photoStickers') || [];

    let getPhotoDataUri = () => {
        return photoDataUri;
    };

    let updatePhotoDataUri = (dataUri) => {
        photoDataUri = dataUri;
        localStorageService.set('photoDataUri', photoDataUri);
    };

    let clearPhoto = () => {
        photoDataUri = '';
        stickers = [];
        localStorageService.set('photoDataUri', photoDataUri);
        localStorageService.set('photoStickers', stickers);
    };

    let getStickers = () => {
        return stickers;
    };

    let addSticker = (stickerData) => {
        stickers.push(stickerData);
        localStorageService.set('photoStickers', stickers);
    };

    return {
        addSticker,
        clearPhoto,
        getStickers,
        getPhotoDataUri,
        updatePhotoDataUri
    };
};

PhotoService.$inject = ['localStorageService'];

export {PhotoService};