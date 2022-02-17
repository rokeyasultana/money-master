const button= document.getElementById('button').addEventListener('click',function(){

    // income
    const incomeValue = document.getElementById('income-value').value;
    const floatIncome = parseFloat(incomeValue );
    // console.log(incomeValue);
        // food
        const foodValue = document.getElementById('food-value').value;
        const floatFoodValue = parseFloat( foodValue);
        // console.log(foodValue);
    
        // rent
        const rentValue  = document.getElementById('rent-value').value;
        const floatRentValue = parseFloat(rentValue );
        // console.log(rentValue);

        
    
        // clothse
        const clothesValue = document.getElementById('clothes-value').value;
        const floatclothseValue = parseFloat(clothesValue );
        // console.log(clothesValue);
        calculate = floatFoodValue +  floatRentValue + floatclothseValue;
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

    const buttons = document.getElementById('button-save').addEventListener('click',function(){

        const savingsAmount = document.getElementById('save-amount');
        
        const persent =((totalBalance.innerText)*savingsAmount.innerText) / 100;
       console.log(persent);

       const savingsAmountValue = document.getElementById('amount');
       savingsAmountValue.innerText =  persent;

    //  reaming  

       const remaingValue = document.getElementById('reaming');

        const reamingBalance = totalBalance.innerText -  persent;

    remaingValue.innerText = reamingBalance;
       
    
        });

    
    }); 
    

   
