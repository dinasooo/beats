const path = "/users/download/index.html"

console.log(isHtml(path))



function isHtml(path){
    const a = "html"
    var bool = true;

    if(a == path.slice(-4)){
        return bool;
    } else{
        bool=false;
    }
    return bool;
}

