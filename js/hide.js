//JavaScriptDocument

function loadResponsiveContent() {
  // Define the target element where content will be loaded
  const targetElement = document.getElementById("gallery");

  // Define the HTML content for screens smaller than 767.99px
  const mobileContent = `
        <!-- Replace with the HTML you want to load for smaller screens -->
        <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="img/pound cake.jpg" width="100%"/></div>
        <div class="swiper-slide"><img src="img/panna cotta.jpg" width="100%"/></div>
        <div class="swiper-slide"><img src="img/chocolate.jpg" width="100%"/></div>
        <div class="swiper-slide"><img src="img/cake.jpg" width="100%"/></div>
        <div class="swiper-slide"><img src="img/basque.jpg" width="100%"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
      `;

  // Check if screen width is less than 767.99px
  if (window.innerWidth < 767.99) {
    targetElement.innerHTML = mobileContent;
  } else {
    <div id="wrap">
      <a href="#menu" class="hb">
        <div class="c">
          <img src="img/basque.jpg" alt="basque cheesecake" />
          <div class="txt">
            <h1>Basque Cheesecake</h1>
            <p>
              淡淡酒香充滿在每一口柔軟綿密的幸福中，配上一壺熱茶或咖啡就是最完美的午後時光。
            </p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="img/basque.jpg" alt="basque cheesecake" />
      </div>
      <a href="#menu" class="hb">
        <div class="c">
          <img src="img/brownie.jpg" alt="brownie" />
          <div class="txt">
            <h1>Brownie</h1>
            <p>
              磨碎的堅果點綴在濃郁可可中，讓外層香脆內層濕潤的口感更加豐富，放上一顆NAZ生巧克力一起回烤，真的超超超好吃！
            </p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="img/brownie.jpg" alt="brownie" />
      </div>
      <a href="#menu" class="hb">
        <div class="c">
          <img src="img/chocolate.jpg" alt="Chocolate Ganache" />
          <div class="txt">
            <h1>Chocolate Ganache</h1>
            <p>
              細緻可可香氣慢慢在口中化開，滿足螞蟻人與大人口味愛好者。
              原味、奶酒、伯爵茶、焙茶， 四種口味熱銷中！
            </p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="img/chocolate.jpg" alt="Chocolate Ganache" />
      </div>
      <a href="#menu" class="hb">
        <div class="c">
          <img src="img/panna cotta.jpg" alt="panna cotta" />
          <div class="txt">
            <h1>Panna Cotta</h1>
            <p>
              每一口都散發著濃郁的迷人奶香，綿密細膩而絲滑的口感，豐富多層次的味蕾饗宴特別受小孩歡迎。
            </p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="img/panna cotta.jpg" alt="panna cotta" />
      </div>
      <a href="#menu" class="hb">
        <div class="c">
          <img src="img/pound cake.jpg" alt="pound cake" />
          <div class="txt">
            <h1>Pound Cake</h1>
            <p>
              香蕉愛好者絕對不能錯過，來自成熟到微微轉黑香蕉的美好香氣，外酥內潤讓人一口接一口。
            </p>
          </div>
        </div>
      </a>
      <div class="fullBg">
        <img src="img/pound cake.jpg" alt="pound cake" />
      </div>
    </div>;
  }
}

$(document).ready(function () {
  loadResponsiveContent();

  // Add an event listener to handle window resize
  window.addEventListener("resize", loadResponsiveContent);
});
