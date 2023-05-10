setTimeout(() => {
    document.querySelector('.img1').classList.add('active');
    document.querySelector('.img2').classList.add('active');
  }, 1000);

  function handleCardClick(card) {
    const cards = document.querySelectorAll('.cards > div');
    let clickedCard = cards[0];
    card.style.width = '60%';
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] !== card) {
            cards[i].style.width = '20%';
            const shopBtn = cards[i].querySelector('.shop-btn');
            if (shopBtn) {
                shopBtn.style.display = 'none';
            }
        } else {
            clickedCard = card;
        }
    }
    const shopBtn = card.querySelector('.shop-btn');
    if (shopBtn) {
        shopBtn.style.display = 'block';
    }
}

const check = () => {
    const sliderValue = document.getElementById("check-blur-clear").value;
    document.getElementById("blur_clear").style.width = sliderValue + "%";
  };