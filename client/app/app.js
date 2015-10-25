import 'bootstrap-css-only';
import './app.css';
import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-draganddrop';
import {homeModule, photoModule, photoAreaModule, photoInputModule, photoStickerModule, stickerModule, stickerSidebarModule} from './components/components';
import {stickersServiceModule} from './services/services';

angular.module('app', [
    'ui.bootstrap',
    'draganddrop',
    homeModule.name,
    photoModule.name,
    photoAreaModule.name,
    photoInputModule.name,
    photoStickerModule.name,
    stickerModule.name,
    stickerSidebarModule.name,
    stickersServiceModule.name
]);

angular.bootstrap(document, ['app']);