console.log(getVowels("Привет! Как дела?"));


function getVowels(str){
    var line = "";
    const vowels = ['а', 'е', 'у', 'ы', 'о', 'я','ё', 'и', 'э', 'ю'];
    
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            line += char;
        }
    }
    return line;
}


