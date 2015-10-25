import {inputFileLink as link} from './input-file.link';

let InputFileComponent = function(){
    return {
        link,
        replace: true,
        restrict: 'A',
        require: 'ngModel',
        scope: {
            ngModel: '='
        }
    };
};

export {InputFileComponent};