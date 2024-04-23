const cheifs = [
    {day:"הראשון",tribe:"יהודה", fullname: "נחשון בן עמינדב"},
    {day:"השני",tribe:"יששכר", fullname: "נתנאל בן צוער"},
    {day:"השלישי",tribe:"זבולן", fullname: "אליאב בן חלן"},
    {day:"הרביעי",tribe:"ראובן", fullname: "אליצור בן שדיאור"},
    {day:"החמישי",tribe:"שמעון", fullname: "שלמיאל בן צורישדי"},
    {day:"הששי",tribe:"גד", fullname: "אליסף בן דעואל"},
    {day:"השביעי",tribe:"אפרים", fullname: "אלישמע בן עמיהוד"},
    {day:"השמיני",tribe:"מנשה", fullname: "גמליאל בן פדהצור"},
    {day:"התשיעי",tribe:"בנימן", fullname: "אבידן בן גדעני"},
    {day:"העשירי",tribe:"דן", fullname: "אחיעזר בן עמישדי"},
    {day:"עשתי עשר יום",tribe:"אשר", fullname: "פגעיאל בן עכרן"},
    {day:"שנים עשר יום",tribe:"נפתלי", fullname: "אחירע בן עינן"},
]

const hisSacrifice = "קרבנו קערת כסף אחת שלשים ומאה משקלה"
const syring = "מזרק אחד כסף שבעים שקל בשקל הקדש שניהם מלאים סלת בלולה בשמן למנחה"
const spoon = "כף אחת עשרה זהב מלאה קטרת"
const bullAndSheeps = "פר אחד בן בקר איל אחד כבש אחד בן שנתו לעלה"
const goat = "שעיר עזים אחד לחטאת"
const ShelamimSacrifice = "ולזבח השלמים בקר שנים אילם חמשה עתדים חמשה כבשים בני שנה חמשה זה קרבן"

for(i=0; i<cheifs.length; i++){
    let dayDesc
    if(i==0){
        dayDesc = "ויהי המקריב ביום " + cheifs[i].day+ " את קרבנו "
        +cheifs[i].fullname+ " למטה " + cheifs[i].tribe
    }
    else if(i==1){
        dayDesc = "ביום " + cheifs[i].day+" הקריב "+
        cheifs[i].fullname +" נשיא "+ cheifs[i].tribe
    }
    else{
        dayDesc = "ביום " + cheifs[i].day+" נשיא לבני "
        + cheifs[i].tribe + " " + cheifs[i].fullname
    }
    console.log(dayDesc)

    if(i == 0)
    {
        console.log(" ו"+ hisSacrifice)
    }
    else if(i==1){
        console.log("הקרב את " + hisSacrifice)
    }else{
        console.log(hisSacrifice)
    }
    console.log(syring)
    console.log(spoon)
    console.log(bullAndSheeps)
    console.log(goat)
    console.log(ShelamimSacrifice +" "+ cheifs[i].fullname)
    console.log("\n")
}

