// 第一个tab数据
const dataList1 = [{
    priceOff: "30", // 降价加个
    title: "tab1产品" // 产品标题
  },
  {
    priceOff: "30",
    title: "tab1产品"
  },
  {
    priceOff: "30",
    title: "tab1产品"
  },
  {
    priceOff: "30",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "50",
    title: "tab1产品"
  },
  {
    priceOff: "70",
    title: "tab1产品"
  },
];

// 第二个tab数据
const dataList2 = [{
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
  {
    priceOff: "50",
    title: "tab2产品"
  },
]

var mySwiper1 = new Swiper('#phone-swiper', {
  loop: true,
  effect: 'fade',
  observer: true,
  observeParents: true,

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination-phone',
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
})

var mySwiper2 = new Swiper('#tab-swiper1', {
  loop: true,
  effect: 'fade',
  observer: true,
  observeParents: true,

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination1',
  },
  
})

var mySwiper3 = new Swiper('#tab-swiper2', {
  loop: true,
  effect: 'fade',
  observer: true,
  observeParents: true,

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination2',
  },
  
})

const dataTemplatePc = document.querySelector("#pc-template");
const dataTemplateMob = document.querySelector("#mob-template");
const listBoxPc1 = document.querySelector("#tab1");
const listBoxPc2 = document.querySelector("#tab2");

const listBoxMob1 = document.querySelector("#tab1-wrapper");
const listBoxMob2 = document.querySelector("#tab2-wrapper");

$(".detail-list-wrap .tab-box .btn").on("click", function() {
  $(this).addClass("active").siblings().removeClass("active");
  var index = $(this).index();
  console.log('document.body.scrollWidth :>> ', document.body.scrollWidth);
  if (document.body.scrollWidth > 834) {
    $(".list-wrap-pc").find(".list-box").eq(index).css("display", "flex").siblings().hide();
  } else {
    $(".list-wrap-mob").find(".swiper").eq(index).show().siblings().hide();
  }
});

window.addEventListener("load", function() {
  loadTab1Info();
  loadTab2Info();
  loadMobTab1Info();
  loadMobTab2Info();
})


// 点击复制
function clickCopy() {
  const copyBtn = document.querySelectorAll(".copy-btn");
  copyBtn.forEach(item => {
    item.addEventListener("click", function() {
      const txt = $(this).prev().text();
      var oInput = document.createElement('input');
      oInput.value = txt;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      oInput.className = 'oInput';
      oInput.style.display = 'none';
    })
  });
}

// 加载第一个tab数据 - PC
function loadTab1Info() {
  dataList1.forEach((item, index) => {
    const template = dataTemplatePc.content.cloneNode(true).children[0];
    const pic = template.querySelector(".pic");
    const price = template.querySelector(".price");
    const txt = template.querySelector(".txt");
    pic.src = "./img/pic1-" + ++index + ".png";
    price.src = "./img/price" + item.priceOff + ".png";
    txt.innerHTML = "<p>" + item.title + "</p>" + "<img src='./img/copy-btn.svg' alt='' class='copy-btn'>";
    listBoxPc1.appendChild(template);
  });
  clickCopy();
}

// 加载第二个tab数据 - PC
function loadTab2Info() {
  dataList2.forEach((item, index) => {
    const template = dataTemplatePc.content.cloneNode(true).children[0];
    const pic = template.querySelector(".pic");
    const price = template.querySelector(".price");
    const txt = template.querySelector(".txt");
    pic.src = "./img/pic2-" + ++index + ".png";
    price.src = "./img/price" + item.priceOff + ".png";
    txt.innerHTML = "<p>" + item.title + "</p>" + "<img src='./img/copy-btn.svg' alt='' class='copy-btn'>";
    listBoxPc2.appendChild(template);
  });
  clickCopy();
}

// 加载第一个tab数据 - MOB
function loadMobTab1Info() {
  dataList1.forEach((item, index) => {
    const template = dataTemplateMob.content.cloneNode(true).children[0];
    const pic = template.querySelector(".pic");
    const price = template.querySelector(".price");
    const txt = template.querySelector(".txt");
    pic.src = "./img/pic2-" + ++index + ".png";
    console.log('item.priceOff :>> ', item.priceOff);
    price.src = "./img/price" + item.priceOff + ".png";
    txt.innerHTML = "<p>" + item.title + "</p>" + "<img src='./img/copy-btn.svg' alt='' class='copy-btn'>";
    listBoxMob1.appendChild(template);
  });
  clickCopy();
}

// 加载第二个tab数据 - MOB
function loadMobTab2Info() {
  dataList2.forEach((item, index) => {
    const template = dataTemplateMob.content.cloneNode(true).children[0];
    const pic = template.querySelector(".pic");
    const price = template.querySelector(".price");
    const txt = template.querySelector(".txt");
    pic.src = "./img/pic2-" + ++index + ".png";
    price.src = "./img/price" + item.priceOff + ".png";
    txt.innerHTML = "<p>" + item.title + "</p>" + "<img src='./img/copy-btn.svg' alt='' class='copy-btn'>";
    listBoxMob2.appendChild(template);
  });
  clickCopy();
}