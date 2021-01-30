
document
.getElementById("f-decrease-ticket")
.addEventListener("click", function () {
    handleTicketChange(false);

});

document
.getElementById("f-increase-ticket")
.addEventListener("click", function () {
    handleTicketChange(true);
});


 function handleTicketChange(isIncrease){
    const ticketInput = document.getElementById('f-ticketCount');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewcount = ticketCount ;
    if(isIncrease == true){
        ticketNewcount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0 ){
        ticketNewcount = ticketCount - 1; 
    }
    
    ticketInput.value = ticketNewcount;
    const firstClassPrice = ticketNewcount *150;
    
    document.getElementById("first-Price").innerText = firstClassPrice;

    totalPrice()
}


document
  .getElementById("eco-decrease-ticket")
  .addEventListener("click", function () {
    ecohandleTicketChange(false);
  });


document
  .getElementById("eco-increase-ticket")
  .addEventListener("click", function () {
    ecohandleTicketChange(true);
  });


  function ecohandleTicketChange(isIncrease){
    const ticketInput = document.getElementById('eco-ticketCount');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewcount = ticketCount ;
    if(isIncrease == true){
        ticketNewcount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0 ){
        ticketNewcount = ticketCount - 1; 
    }
    
    ticketInput.value = ticketNewcount;
    const ecoClassPrice = ticketNewcount *100;
    
     document.getElementById("eco-Price").innerText = ecoClassPrice ;

     totalPrice()
}


function totalPrice(){
  const fInput = document.getElementById('first-Price').innerText;
  const fticketPrice = parseInt(fInput);

  const econInput = document.getElementById('eco-Price').innerText;
  const eticketPrice = parseInt(econInput);

  const totalPrice = fticketPrice + eticketPrice ;
  document.getElementById('total-Price').innerText = '$' +totalPrice ;

  const taxAmount = totalPrice * .10;
  document.getElementById('tax-amount').innerText = '$' +taxAmount ;

  const grandTotal = totalPrice + taxAmount ;
  document.getElementById('grand-total').innerText = '$' +grandTotal ;

}




