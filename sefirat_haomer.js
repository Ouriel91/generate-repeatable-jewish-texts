const map = new Map([
    [1, 'אחד'],[2, 'שני'],[3, 'שלושה'],[4, 'ארבעה'],[5, 'חמישה'],
    [6, 'ששה'],[7, 'שבעה'],[8, 'שמונה'],[9, 'תשעה'],[10, 'עשרה'],
    [11, 'אחד עשר'],[12, 'שניים עשר'],[13, 'שלושה עשר'],[14, 'ארבעה עשר'],[15, 'חמישה עשר'],
    [16, 'ששה עשר'],[17, 'שבעה עשר'],[18, 'שמונה עשר'],[19, 'תשע עשר'],[20, 'עשרים'],
    [21, 'אחד ועשרים'],[22, 'שניים ועשרים'],[23, 'שלושה ועשרים'],[24, 'ארבעה ועשרים'],[25, 'חמישה ועשרים'],
    [26, 'ששה ועשרים'],[27, 'שבעה ועשרים'],[28, 'שמונה ועשרים'],[29, 'תשעה ועשרים'],[30, 'שלושים'],
    [31, 'אחד ושלושים'],[32, 'שניים ושלושים'],[33, 'שלושה ושלושים'],[34, 'ארבעה ושלושים'],[35, 'חמישה ושלושים'],
    [36, 'ששה ושלושים'],[37, 'שבעה ושלושים'],[38, 'שמונה ושלושים'],[39, 'תשעה ושלושים'],[40, 'ארבעים'],
    [41, 'אחד וארבעים'],[42, 'שניים וארבעים'],[43, 'שלושה וארבעים'],[44, 'ארבעה וארבעים'],[45, 'חמישה וארבעים'],
    [46, 'ששה וארבעים'],[47, 'שבעה וארבעים'],[48, 'שמונה וארבעים'],[49, 'תשעה וארבעים'],
]);

const calcOmer = (num) => {

    if(num <= 0  || num > 49)
        return 'מספר שגוי'

    if(num < 7)
        return "היום "+ map.get(num) + " ימים לעומר"

    if(num % 7 === 0){
        weeks = num / 7
        if(num / 7 === 1){
            return "היום "+ map.get(num) + " ימים לעומר " + " שהם שבוע  " + map.get(weeks)
        }
        return "היום "+ map.get(num) + " ימים לעומר " + " שהם " + map.get(weeks) + " שבועות "
    }

    days = num % 7
    weeks = Math.floor(num / 7)
    
    week_output = weeks === 1 ? "שבוע אחד" : map.get(weeks) + " שבועות"
    days_output = days === 1 ? "יום אחד" : map.get(days) + " ימים"

    final_output = "היום "+ map.get(num) + " ימים לעומר " + " שהם " + week_output + " ו " + days_output

    return final_output
}

console.log(calcOmer(-6));
console.log(calcOmer(0));
console.log(calcOmer(50));

for(i=1 ; i<=49; i++){
    console.log(calcOmer(i))
}