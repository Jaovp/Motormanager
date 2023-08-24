
export const phoneNumberFormat = (num: string) => {
    if (!num) return "";

    // Remove caracteres não numéricos do número de telefone
    let newNum = num.replace(/\D/g, '');

    let x;
    if (newNum.length <= 2) {
        x = newNum;
    } else if (newNum.length <= 7) {
        x = `(${newNum.slice(0, 2)}) ${newNum.slice(2, 7)}`;
    } else {
        x = `(${newNum.slice(0, 2)}) ${newNum.slice(2, 7)}-${newNum.slice(7, 11)}`;
    }
    return x;
};

export const cpfFormat = (num: string) => {
    if (!num) return "";

    // Remove caracteres não numéricos do número de telefone
    let newNum = num.replace(/\D/g, '');

    let x;
    if (newNum.length <= 3) {
        x = newNum;
    } else if (newNum.length <= 6) {
        x = `${newNum.slice(0, 3)}.${newNum.slice(3, 6)}`;
    } else if (newNum.length <= 9) {
        x = `${newNum.slice(0, 3)}.${newNum.slice(3, 6)}.${newNum.slice(6, 9)}`;
    } else {
        x = `${newNum.slice(0, 3)}.${newNum.slice(3, 6)}.${newNum.slice(6, 9)}-${newNum.slice(9, 11)}`;
    }
    return x;
} 

export const cnpjFormat = (num: string) => {
    if (!num) return "";
    let newNum = num.replace(/\D/g, '');
    let x;
    if(newNum.length <= 2){
        x = newNum;
    }else if(newNum.length <= 5){
        x = `${newNum.slice(0,2)}.${newNum.slice(2,5)}`;
    }else if(newNum.length <= 8){
        x = `${newNum.slice(0,2)}.${newNum.slice(2,5)}.${newNum.slice(5,8)}`;
    }else if(newNum.length <= 12){
        x = `${newNum.slice(0,2)}.${newNum.slice(2,5)}.${newNum.slice(5,8)}/${newNum.slice(8,12)}`;
    }else{
        x = `${newNum.slice(0,2)}.${newNum.slice(2,5)}.${newNum.slice(5,8)}/${newNum.slice(8,12)}-${newNum.slice(12,14)}`;
    }
    return x;
}



