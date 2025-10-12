    const customer = ["emma","liam","sophia","noah"];

    const result2 = document.getElementById("task2Result");

    customer.forEach(customer => {
        result2.innerHTML += `<p>Thank you dear ${customer} for choosing us</p>`;
    });