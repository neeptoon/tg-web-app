export function index(num) {
    const word1 = 'нов';
    const word2 = 'активност';
    const div = num % 10;

    if(num === 0) {
        return null;
    }

    if (num >= 11 && num <= 20) {
        return `${word1}ых ${word2}ей`;
    }

    if (div === 1) {
        return `${word1}ая ${word2}ь`;
    }

    if (div >= 2 && div <= 4) {
        return `${word1}ые ${word2}и`;
    }

    if ((div >= 5 && div <= 10) || div === 0) {
        return `${word1}ых ${word2}ей`;
    }
}

function roundToMultiple(num, multiple) {
    return Math.round(num/multiple)*multiple;
}

export function getMarksSlider(minValue, maxValue) {
    const ROUNDED_NUM = 5;
    const scales = [0, 12, 25, 37, 50, 63, 75, 87, 100];
    const result = [];

    scales.forEach((item, index) => {
        if (index === 0) {
            result.push({value: minValue, label: String(minValue)});
        } else  if (index === scales.length -1) {
            result.push({value: maxValue, label: String(maxValue)});
        } else {
            const val = Math.floor(maxValue * item / 100);
            const roundedValue = roundToMultiple(val, ROUNDED_NUM);
            result.push({value: roundedValue, label: String(roundedValue)});
        }
    });

    return result;
}