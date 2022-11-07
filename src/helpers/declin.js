export function declin(num) {
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