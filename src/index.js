module.exports = function toReadable (number) {
    const first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const second = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    let numberStr = String(number)

    if (numberStr === '0') return 'zero';

    if (numberStr.length === 3) {
        result = `${first[numberStr[0]]} hundred`;
        numberStr = numberStr.slice(1);
    }

    if (numberStr.length === 2) {
        if (Number(numberStr) < 20) {
            result = `${result} ${first[Number(numberStr)]}`;
        } else {
            result = `${result} ${second[numberStr[0]]} ${first[numberStr[1]]}`;
            numberStr = numberStr.slice(1);
        }
    } else if (numberStr.length === 1) {
        result = `${first[numberStr[0]]}`;
    }

    return result.trim();
}
