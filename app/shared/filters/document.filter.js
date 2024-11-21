angular.module('clientApp')
    .filter('documentFormat', function () {
        return function (document, type) {
            if (!document || !type) return document;

            const applyMask = (value, mask) => {
                const onlyNumbers = value.replace(/\D/g, '');
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

            const cpfMask = '###.###.###-##';
            const cnpjMask = '##.###.###/####-##';

            const mask = type === 'Fisica' ? cpfMask : cnpjMask;
            const requiredLength = type === 'Fisica' ? 11 : 14;
            const onlyNumbers = document.replace(/\D/g, '');

            // Ensure the document has the required length
            if (onlyNumbers.length < requiredLength) return document;

            return applyMask(document, mask);
        };
    });
