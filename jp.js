let userInput = document.getElementById("date");
let result = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");
userInput.max = new Date().toISOString().split("T")[0];
   


function calculateAge(){
    const birthdayValue = userInput.value;

    if(userInput.value === ""){
        alert(`please enter your birthday`);
    }else{
        const age = getAge(birthdayValue);
        result.textContent = `you are ${age} ${age < 2 ? "year" : "years"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }

    return age;
}

calculateBtn.addEventListener("click" , calculateAge);

    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    setInterval(()=> {
        let todaysDate = new Date();

        hrs.innerHTML = (todaysDate.getHours()<10?"0":"") + todaysDate.getHours();
        min.innerHTML = (todaysDate.getMinutes()<10?"0":"") + todaysDate.getMinutes();
        sec.innerHTML = (todaysDate.getSeconds()<10?"0":"") + todaysDate.getSeconds();
    },1000);

