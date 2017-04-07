//big project (gathering elements from HTML)
var color = document.getElementsByName("color");
var shoes = document.getElementsByName("shoes");
var brows = document.getElementsByName("brows");
var sports = document.getElementsByName("sports");
var car = document.getElementsByName("car");
var personality = document.getElementsByName("personality");
var age = document.getElementsByName("age");
var food = document.getElementsByName("food");
var animal = document.getElementsByName("animal");


//what happens after clicking the submit button

document.getElementById("submit").addEventListener("click", function() {

     var hesby = 0;
     var gross = 0;
     var g = 0;
     var dalton = 0;
     var mogannam = 0;
     var oconnor = 0;
     var mccarty = 0;



     // question 1

     for (var i = 0; i < color.length; i++) {
          if (color[i].checked) {


               alert(color[i].value)
               
               if (color[i].value === "Mr. Hesby") {
                    hesby++;
               }

               else if (color[i].value === "Ms. Gross") {
                    gross++;
               }

               else if (color[i].value === "Ms. G") {
                    g++;
               }

               else if (color[i].value === "Mr. Dalton") {
                    dalton++;
               }

               else if (color[i].value === "Mr.McCarty") {
                    mccarty++;
               }

               else if (color[i].value === "Ms. O'Connor") {
                    oconnor++;
               }

               else if (color[i].value === "Ms.Mogannam") {
                    mogannam++;
               }
               alert(hesby)

          }
     }


     // question 2

     for (var i = 0; i < brows.length; i++) {
          if (brows[i].checked) {

               // do whatever you want with the checked radio
               // console.log(brows[i].value);
               // only one radio can be logically checked, don't check the rest

               if (shoes[i].value === "Mr. Hesby") {
                    hesby++;
               }

               else if (shoes[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (shoes[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (shoes[i].value === "Ms. G") {
                    g++;
               }
               else if (shoes[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (shoes[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (shoes[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }




     // question 3

     for (var i = 0; i < brows.length; i++) {
          if (brows[i].checked) {

               // do whatever you want with the checked radio
               // console.log(brows[i].value);
               // only one radio can be logically checked, don't check the rest

               if (brows[i].value === "Mr. Hesby") {
                    hesby++;
               }

               else if (brows[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (brows[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (brows[i].value === "Ms. G") {
                    g++;
               }
               else if (brows[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (brows[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (brows[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }

     // question 4

     for (var i = 0; i < sports.length; i++) {
          if (sports[i].checked) {

               // do whatever you want with the checked radio
               // console.log(sports[i].value);
               // only one radio can be logically checked, don't check the rest
               if (sports[i].value === "Mr. Hesby") {
                    hesby++;
               }
               else if (sports[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (sports[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (sports[i].value === "Ms. G") {
                    g++;
               }
               else if (sports[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (sports[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (sports[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }

     // question 5


     for (var i = 0; i < car.length; i++) {
          if (car[i].checked) {

               // do whatever you want with the checked radio
               // console.log(car[i].value);
               // only one radio can be logically checked, don't check the rest
               if (car[i].value === "Mr. Hesby") {
                    hesby++;
               }
               else if (car[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (car[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (car[i].value === "Ms. G") {
                    g++;
               }
               else if (car[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (car[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (car[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }


     // question 6

     for (var i = 0; i < personality.length; i++) {
          if (personality[i].checked) {

               // do whatever you want with the checked radio
               // console.log(personality[i].value);
               // only one radio can be logically checked, don't check the rest
               if (personality[i].value === "Mr. Hesby") {
                    hesby++;
               }
               else if (personality[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (personality[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (personality[i].value === "Ms. G") {
                    g++;
               }
               else if (personality[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (personality[i].value === "Mr. O'Connor") {
                    oconnor++;
               }
               else if (personality[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }


     // question 7

     for (var i = 0; i < age.length; i++) {
          if (age[i].checked) {

               // do whatever you want with the checked radio
               // console.log(age[i].value);
               // only one radio can be logically checked, don't check the rest
               if (age[i].value === "Mr. Hesby") {
                    hesby++;
               }
               else if (age[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (age[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (age[i].value === "Ms. G") {
                    g++;
               }
               else if (age[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (age[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (age[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }

     // question 8

     for (var i = 0; i < food.length; i++) {
          if (food[i].checked) {

               // do whatever you want with the checked radio
               // console.log(food[i].value);
               // only one radio can be logically checked, don't check the rest
               if (food[i].value === "Mr. Hesby") {
                    hesby++;
               }
               else if (food[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (food[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (food[i].value === "Ms. G") {
                    g++;
               }
               else if (food[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (food[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (food[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }
     // question 9

     for (var i = 0; i < animal.length; i++) {
          if (animal[i].checked) {

               // do whatever you want with the checked radio
               // console.log(animal[i].value);
               // only one radio can be logically checked, don't check the rest
               if (animal[i].value === "Mr. Hesby") {
                    hesby++;
               }
               else if (animal[i].value === "Ms. Gross") {
                    gross++;
               }
               else if (animal[i].value === "Mr. Dalton") {
                    dalton++;
               }
               else if (animal[i].value === "Ms. G") {
                    g++;
               }
               else if (animal[i].value === "Mr.McCarty") {
                    mccarty++;
               }
               else if (animal[i].value === "Ms. O'Connor") {
                    oconnor++;
               }
               else if (animal[i].value === "Ms. Mogannam") {
                    mogannam++;
               }
          }
     }


// algorithm for finding the result (by counting the most selected one for a specific teacher)


     var results = Math.max(hesby, g, gross, dalton, mogannam, mccarty, oconnor);

     if (hesby === results) {
          console.log("Mr. Hesby");
     }

     else if (g === results) {
          console.log("Ms. G");
     }

     else if (gross === results) {
          console.log("Ms. Gross");
     }

     else if (dalton === results) {
          console.log("Mr. Dalton");
     }

     else if (mogannam === results) {
          console.log("Ms. Mogannam");
     }

     else if (mccarty === results) {
          console.log("Mr. McCarty");
     }

     else if (oconnor === results) {
          console.log("Ms. O'Connor");
     }

});
