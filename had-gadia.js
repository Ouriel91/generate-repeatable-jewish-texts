const itemAndActs = [
    {item:'גדיא', act:'אכלא'},
    {item:'שונרא', act:'נשך'},
    {item:'כלבא', act:'הכה'},
    {item:'חוטרא', act:'שרף'},
    {item:'נורא', act:'כבא'},
    {item:'מיא', act:'שתה'}, 
    {item:'תורא', act:'שחט'},
    {item:'שוחט', act:'שחט'},
    {item:'מלאך המוות', act:'שחט'},
    {item:'הקדוש ברוך הוא', act:''}
    ]
const oneYoungGoat= 'חד גדיא חד גדיא'
const twoZuzei = 'דזבין אבא בתרי זוזי'

const opening = oneYoungGoat + ' ' + twoZuzei + ' ' + oneYoungGoat
const and = 'ו'
const de = 'ד'
const to = 'ל'
const andCame = 'ואתא'
console.log(opening)

console.log('\n')
for (i=0; i<itemAndActs.length -1; i++){
    for(j=i+1; j>=0; j--){
            if(j==i+1){
                console.log(andCame + ' ' + itemAndActs[j].item)
            }
            else{
                let andOrDe
                if(j == i){
                    andOrDe = and
                }
                else {
                    andOrDe = de
                }
                console.log(andOrDe + itemAndActs[j].act + ' ' + to + itemAndActs[j].item)
            }
    }
    console.log(twoZuzei + ' ' + oneYoungGoat)
    console.log('\n')
}
