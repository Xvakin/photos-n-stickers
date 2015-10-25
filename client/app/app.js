import 'bootstrap-css-only';
import './app.css';
import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-draganddrop';
import 'angular-local-storage';
import {homeModule, inputFileModule, photoModule, photoAreaModule, photoStickerModule, stickerModule, stickerSidebarModule} from './components/components';
import {photoStickersServiceModule, stickersServiceModule} from './services/services';

angular.module('app', [
    'ui.bootstrap',
    'draganddrop',
    'LocalStorageModule',
    homeModule.name,
    inputFileModule.name,
    photoModule.name,
    photoAreaModule.name,
    photoStickerModule.name,
    stickerModule.name,
    stickerSidebarModule.name,
    photoStickersServiceModule.name,
    stickersServiceModule.name
]);

angular.module('app').config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('photos-n-stickers');
});

angular.bootstrap(document, ['app']);