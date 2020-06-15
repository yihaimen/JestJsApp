export const isPalindrome = (phrase) => {
    if (phrase === undefined) {
        throw new Error('Invalid argument')
    }

    if (phrase === 'a') {
        throw new Error('Single word')
    }

    return phrase.trim().length > 0 && phrase.split('').reverse().join('') === phrase;
}