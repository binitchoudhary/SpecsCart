setTimeout(() => {
    document.querySelector('.img1').classList.add('active');
  }, 1000);

  setTimeout(() => {
    document.querySelector('.img2').classList.add('active');
  }, 2000);

  setTimeout(() => {
    document.querySelector('.img3').classList.add('active');
  }, 3000);
  function handleCardClick(card) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
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
  }
  

const check = () => {
    const sliderValue = document.getElementById("check-blur-clear").value;
    document.getElementById("blur_clear").style.width = sliderValue + "%";
  };