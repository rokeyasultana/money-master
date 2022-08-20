
function minus(income, expense) {
    return income - expense;
  }
const button= document.getElementById('button').addEventListener('click',function(){

     // income
    const incomeValue = document.getElementById('income-value').value;
    const floatIncome = parseFloat(incomeValue );
  // console.log(incomeValue);
 
      // food
        const foodValue = document.getElementById('food-value').value;
        const floatFoodValue = parseFloat( foodValue);
        console.log(foodValue);

        
        // rent
        const rentValue  = document.getElementById('rent-value').value;
        const floatRentValue = parseFloat(rentValue );
        // console.log(rentValue);

        
    
        // clothes
        const clothesValue = document.getElementById('clothes-value').value;
        const floatClothesValue = parseFloat(clothesValue );

        // console.log(clothesValue);
        calculate = floatFoodValue +  floatRentValue + floatClothesValue ;
        console.log(calculate);
    
        // total expenses
        const totalExpenses = document.getElementById('expenses')
        totalExpenses.innerText = calculate;
        console.log(totalExpenses);
    
    
    //   Balance
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = floatIncome - calculate;
    console.log(totalBalance);
    

    // saving

    document.getElementById("button-save").addEventListener("click", function () {
        const incomeAmount = document.getElementById("income-value");
        const balanceAmount = document.getElementById("balance");
      
        const savings = document.getElementById("save-amount");

        const savingAmount = document.getElementById("saving-amount");

        const remainingAmount = document.
        getElementById("reaming-amount");
      
        let incomeValue = Number(incomeAmount.value);
        let saveValue = Number(savings.value);
      
        if (
          incomeAmount.value == "" ||
          incomeAmount.value < 0 ||
          Number.isNaN(incomeValue)
        ) {
          alert("Please type percentage");
        } else if (
          savings.value == "" ||
          savings.value <= 0 ||
          Number.isNaN(saveValue)
        ) {
          alert("Please type number");
        } else {

          //savings
          let savingAmountInner =
            (parseFloat(incomeAmount.value) * parseFloat(savings.value)) / 100;
      
         
          let remainingAmountInner = minus(
            parseFloat(balanceAmount.innerText),
            parseFloat(savingAmountInner)
          );
      
          if (remainingAmountInner > savingAmountInner) {
            savingAmount.innerText = savingAmountInner;
            remainingAmount.innerText = remainingAmountInner;
            savings.value = "";
          } else {
            alert("Please reduce saving percentage");
            savings.value = "";
          }
        }
      });

    
    }); 
    

   
