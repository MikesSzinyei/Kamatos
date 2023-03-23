
const betetInput = document.querySelector('#betet')
const kamatInput = document.querySelector('#nevlegesKamat')
const tokesInput = document.querySelector('#tokesites')
const calcButton = document.querySelector('#calcButton')
const tenylegesKamat = document.querySelector('#tenylegesKamat')


calcButton.addEventListener('click', () =>{
    main();
})

function main() {
    let betetGood = regexInput(betetInput.value)
    let kamatGood = regexInput(kamatInput.value)
    let tokeGood = regexInput(tokesInput.value)

    if(betetGood && kamatGood && tokeGood) {
        
        let bet = Number(betetInput.value)
        let kam = Number(kamatInput.value)
        let tok = Number(tokesInput.value)
        let eredmeny = calcTenylegesKamat(bet, kam, tok);
        tenylegesKamat.value = eredmeny;

    } else {

        alert("Hiba!")
    }
}


function calcTenylegesKamat(b,k,t) {
    return b*(Math.pow((1+(k/(100*t))),t)-1)
}

function regexInput(input) {
    let result = input.match(/^[0-9]+$/)
    return result
}