// waf  to take any digit (0-9) and return its in word form 

function digitToWords(digit) {
    const words ={
        0: "Zero" ,
        1: "One", 
        2:"Two",
        3:"Three" , 
        4:"Four", 
        5:"Five" ,
        6:"Six" , 
        7:"Seven" ,
        8:"Eight" ,
        9:"Nine"
    };
    return words[digit] || "Invalid digit";
}
    console.log((digitToWords(5)));
    console.log((digitToWords(0)));
    console.log((digitToWords(9)));
    // frontend  - class , react , angular , view . 
    // html , css(Bootstrap , tailwind )  ,  javascript.
    // backend - node.js , django , springboot , fastapi , php .
