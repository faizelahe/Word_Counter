const keys = [];
const chars = document.querySelector('.btn-characters')
const words = document.querySelector('.btn-words');
const spaces = document.querySelector('.btn-spaces');

document.querySelector('textarea').addEventListener('keyup', (e) => {
    count(e.target.value)

    e.preventDefault()
})

count = (val) => {
    wordCount = val.split(' ')
    chars.value = val.length;

    wordCount.forEach((word) => {
        if (word === "") {
            words.value = wordCount.length - 1;
        } else {
            words.value = wordCount.length;
        }
        console.log(word)
    })
    console.log(wordCount)
    spaces.value = wordCount.length - 1;
}


