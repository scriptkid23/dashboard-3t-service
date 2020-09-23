function shortString(str){
    str = str.replace(/&nbsp;/gi," ")
    if(!str) return " ";
    if(str.substring(0,str.indexOf(" ",100)).length > 0){
        return str.substring(0,str.indexOf(" ",28)).trim() + '...'
    }
    else{
        return str.trim();
    }
}
export {shortString}
