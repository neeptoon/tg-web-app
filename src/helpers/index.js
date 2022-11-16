import RightAnswImg from '../assets/images/right-answer.png';
import WrongAnswImg from '../assets/images/wrong-answer.png';

export function index(num) {
    const word1 = 'нов';
    const word2 = 'активност';
    const div = num % 10;

    if (num === 0) {
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

function diffBtwNum(answer, userAnswer) {
    return Math.abs(100 * (Number(userAnswer) - answer) / answer);
}

export function getFinalResults(answer, userAnswer) {
    const diff = diffBtwNum(answer, userAnswer);

    console.log(diff);

    if(diff === 0){
        return {
            image: RightAnswImg,
            title: <span>Совершенно <br/> точно!</span>,
        };
    }

    if(diff <= 5 && diff !== 0 ) {
        return {
            image: RightAnswImg,
            title: <span>Почти <br/> правильно!</span>,
        };
    }

    if (diff > 5) {
        return {
            image: WrongAnswImg,
            title: <span>Не совсем так!</span>,
        };

    }
}
