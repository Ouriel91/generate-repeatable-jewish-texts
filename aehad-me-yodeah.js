const content = [
    {num:"אחד",item:"אלוהינו"},
    {num: "שניים", item:"לוחות הברית"},
    {num: "שלושה", item:"אבות"},
    {num: "ארבע", item:"אמהות"},
    {num: "חמישה", item:"חומשי תורה"},
    {num: "שישה",item:"סדרי משנה"},
    {num: "שבעה", item:"ימי שבתא"},
    {num: "שמונה", item:"ימי מילה"},
    {num: "תשעה", item:"ירחי לידה"},
    {num: "עשרה",item:"דבריא"},
    {num: "אחד עשר", item:"כוכביא"},
    {num: "שניים עשר", item:"שבטיא"},
    {num: "שלושה עשר", item:"מידיא"}
]

for(i=0; i<content.length; i++){
    console.log(content[i].num +" מי יודע?")
    console.log(content[i].num +" אני יודע ")
    for(j=i; j>=0; j--){
        if(j==1)
            content[j].num = "שני"
        console.log(content[j].num + " " + content[j].item)
    }
    console.log("אלוהינו אלוהינו אלוהינו אלוהינו שבשמיים ובארץ")
    console.log("\n")
}

