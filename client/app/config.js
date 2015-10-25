function config(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('app');
}

config.$inject = ['localStorageServiceProvider'];

export {config};