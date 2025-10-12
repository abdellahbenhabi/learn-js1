    const customerspending = [75,120,90,200,50,150];

    const result1 = document.getElementById("task1Result");
    
    const morethan100 = customerspending.filter(customerspending => customerspending > 100);

    result1.innerHTML = morethan100.join(", ");