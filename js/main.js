const people = [
    { name : "Владилен" , age : 25  , budget :40000 },

    { name : "Елена" , age : 17  , budget :3400},

    { name : "Игорь" , age : 49  , budget :50000 },

    { name : "Михаил" , age : 15  , budget :1800 },

    { name : "Василиса" , age : 24  , budget :25000 },

    { name : "Виктория" , age : 38  , budget :2300}
]


/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////      FOREACH           /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



// ForEach bir arrayin icinde melumatlari goturmek ucun istifade edirik bir nov (for) kimi stifade edilir




people.forEach(person => console.log(person))    // Burada deyilirki people adlanan arrayin icinde dovr ele ve bir person adlanan funksiya yarat ve o funcsiyani console log da goster


//Netice
// {name: 'Владилен', age: 25, budget: 40000}
// {name: 'Елена', age: 17, budget: 3400}
// {name: 'Игорь', age: 49, budget: 50000}
// {name: 'Михаил', age: 15, budget: 1800}
// {name: 'Василиса', age: 24, budget: 25000}
//  {name: 'Виктория', age: 38, budget: 2300}







/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////    MAP        ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


// MAP metoduda birnov FOREACH kimi calisir , lakin  MAP bize objectin icindeki melumatlari ayriligda goturmeye komek edir


var newPeople = people.map(person => person.name)       //burada biz objectin icindeki yalniz adlari console logda gosteririk

console.log(newPeople);

//Netice

// (6) ['Владилен', 'Елена', 'Игорь', 'Михаил', 'Василиса', 'Виктория']
// 0:"Владилен"
// 1:"Елена"
// 2:"Игорь"
// 3:"Михаил"
// 4:"Василиса"
// 5:"Виктория"




var newPeople = people.map(person => `${person.name} (${person.budget})`);  // burda ise istediyimiz 2 melumati cixardirig consola
console.log(newPeople);

//Netice

// (6) ['Владилен (40000)', 'Елена (3400)', 'Игорь (50000)', 'Михаил (1800)', 'Василиса (25000)', 'Виктория (2300)']
// 0:"Владилен (40000)"
// 1:"Елена (3400)"
// 2:"Игорь (50000)"
// 3:"Михаил (1800)"
// 4:"Василиса (25000)"
// 5:"Виктория (2300)"


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// FILTER       ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


// FILTER metodu meselcun obyektin icinde sert goyurugki 18+ yawlari yalniz secsin


var adults = people.filter(person=> person.age >=18)    // burda people array in icinde filter metodu ile dovr adirik ve yasi 18 e beraber ve yuxari olanlari consol logda cixardirig

console.log(adults);

//Netice

// (4) [{…}, {…}, {…}, {…}]
// 0:{name: 'Владилен', age: 25, budget: 40000}
// 1:{name: 'Игорь', age: 49, budget: 50000}
// 2:{name: 'Василиса', age: 24, budget: 25000}
// 3:{name: 'Виктория', age: 38, budget: 2300}





/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   REDUCE   ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////




//REDUCE metodu  final deyeri almag ucun istifade edilir .Meselcun array in icindeki olan maawlarin bir cemini hesablamag ucun komek edir



var amount = people.reduce ( (total,person) => total + person.budget , 0 )  //sondaki 0 totalin 0 dan baslamagini qeyd edirik

console.log(amount);

// Netice

// 122500


// https://reduce.surge.sh/ bu linke daxil oldugda animasiya sekilinde reduce ni daha yaxsi anlamag olar








/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////   FIND          ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



// arrayin icinde hansisa bir maaw alan ,hansisa bir yawi olan ve yaxud hansisa bir adnan axtaris elemek ucun istifade edirik

//Meselcun Igoru tapirig


var iqor = people.find (person=>person.name == 'Игорь')

console.log(iqor);

// Netice

// {name: 'Игорь', age: 49, budget: 50000}
// age:49
// budget:50000
// name:"Игорь"




/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////   FINDINDEX            //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// Bu metod FIND ki iwleyir lakin neticede index i cixaridririq


var iqorIndex = people.findIndex(person => person.name == "Игорь")

console.log(iqorIndex);


//Neticede Iqor adi olan obyektin idex i cixir

//netice

// 2
