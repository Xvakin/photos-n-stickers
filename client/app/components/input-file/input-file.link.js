import angular from 'angular';

function inputFileLink(scope, element, attrs, ngModel) {
    ngModel.$render = function (val) {
        if (val) {
            ngModel.$setViewValue(val);
        }
    };

    element.bind('change', (event) => {
        let files = event.target.files;
        let f = files[0];
        let reader = new FileReader();
        reader.onload = ((file) => {
            return (event) => {
                scope.$apply(() => {
                    ngModel.$render(event.target.result);
                });
            };
        })(f);
        reader.readAsDataURL(f);
    });

}

export {inputFileLink};