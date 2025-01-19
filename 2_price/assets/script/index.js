function calculateTotalPrice (quantity=2, price=15000000){
    const totalPrice=quantity*price;
    alert(`Стоимость покупки: ${totalPrice.toLocaleString('ru-RU')} рублей`)
}

function calculateTotalPriceDown (quantity=2, price=15000000){
    const totalPriceDown=quantity*price;
    const formattedPrice=totalPriceDown.toLocaleString('ru-RU');
    const priceElement=document.getElementById('total-price');
    priceElement.textContent=`Стоимость покупки: ${formattedPrice} рублей`;
}