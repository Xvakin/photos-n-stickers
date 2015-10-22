import 'normalize.css';
import './app.css';
import angular from 'angular';
import {homeModule} from './home/home';

angular.module('app', [
    homeModule.name
]);

angular.bootstrap(document, ['app']);