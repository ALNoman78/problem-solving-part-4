function calculateMoney(ticketQuantity) { //, gard ,stuff
    if (ticketQuantity < 0) {
        return "Invalid Number";
    }
    const perTicketPrice = 120;
    const gardCharge = 500;
    const stuffFood = 50;

    const ticketPrice = perTicketPrice * ticketQuantity;
    const gardDemand = gardCharge * 1;
    const stuffCharge = stuffFood * 8;
    const charge =  gardDemand + stuffCharge;

    const totalAmount = ticketPrice - charge;

    return totalAmount;
}

const totalCharge = calculateMoney(-130)
console.log(totalCharge);