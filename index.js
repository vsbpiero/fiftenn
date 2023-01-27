const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('ehhhhh :D, gracias por dejarme ser tu novio, tu compañero por más tiempo eres mi persona favorita y la chica que mas amo te amo y voy a dar lo mejor de mi por mi y por nosotros por que de vrd quiero continuar contigo por que siento muchas cosas que no podria describirte solo las siento y eso solo pasa contigo es indestriptible, te quiero a mi lado disculpa por ser tan intenso a veces y como dije intentare mejorar tanto por mi como por nosotros te amo<3 ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})