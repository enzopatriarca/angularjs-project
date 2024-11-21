angular.module('clientApp')
    .directive('documentMask', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                const applyMask = (value, type) => {
                    if (!value) return value;

                    const cpfMask = '###.###.###-##';
                    const cnpjMask = '##.###.###/####-##';
                    const mask = type === 'Fisica' ? cpfMask : cnpjMask;

                    let onlyNumbers = value.replace(/\D/g, '');
                    let formattedValue = '';
                    let maskIndex = 0;

                    for (let i = 0; i < onlyNumbers.length; i++) {
                        if (maskIndex >= mask.length) break;
                        if (mask[maskIndex] !== '#') {
                            formattedValue += mask[maskIndex];
                            maskIndex++;
                        }
                        formattedValue += onlyNumbers[i];
                        maskIndex++;
                    }

                    return formattedValue;
                };

                // Apply mask on input changes
                ngModelCtrl.$parsers.push((value) => {
                    const clientType = scope.client?.type || 'Fisica'; // Default to 'Fisica' if undefined
                    const formattedValue = applyMask(value, clientType);
                    ngModelCtrl.$setViewValue(formattedValue);
                    ngModelCtrl.$render();
                    return formattedValue.replace(/\D/g, ''); // Return only numbers for the model
                });

                // Format initial values
                ngModelCtrl.$formatters.push((value) => {
                    const clientType = scope.client?.type || 'Fisica';
                    return applyMask(value, clientType);
                });

                // Listen for blur events to validate input length
                element.on('blur', () => {
                    const clientType = scope.client?.type || 'Fisica';
                    const minLength = clientType === 'Fisica' ? 11 : 14;
                    const value = ngModelCtrl.$modelValue;

                    if (value && value.length < minLength) {
                        ngModelCtrl.$setViewValue('');
                        ngModelCtrl.$render();
                    }
                });

                // Watch for type changes and reapply the mask
                scope.$watch('client.type', (newType, oldType) => {
                    if (newType !== oldType) {
                        const value = ngModelCtrl.$modelValue || '';
                        const formattedValue = applyMask(value, newType);
                        ngModelCtrl.$setViewValue(formattedValue);
                        ngModelCtrl.$render();
                    }
                });
            }
        };
    });
