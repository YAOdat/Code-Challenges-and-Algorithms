'use strict';

function firstRepeatedWord(str) {
    const words = str.split(' ');
    const hash = {};
    for (let i = 0; i < words.length; i++) {

        if (hash[words[i]]) {
          
        return words[i];
        } else {
        hash[words[i]] = true;
        }
    }
    return 'No repeated words';
    }

module.exports = firstRepeatedWord;