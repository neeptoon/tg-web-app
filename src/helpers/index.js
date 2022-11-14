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


export function getMarksSlider(minValue, maxValue) {
    return [
        {value: minValue, label: String(minValue)},
        {value: Math.floor((maxValue + minValue) * 0.5), label: String(Math.floor((maxValue + minValue) * 0.5))},
        {value: maxValue, label: String(maxValue)},
    ];
}
export function diffBtwNum(answer, userAnswer) {
    console.log(answer, userAnswer);
    return Math.abs(100*(Number(userAnswer) - answer)/answer);
}
