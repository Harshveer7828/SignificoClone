(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

function homepageAnime() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      scrub: 2,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  });

  tl.to(
    ".marqueContainer",
    {
      scale: "1",
    },
    "a"
  )

    .to(
      ".videoContainer",
      {
        "--clip": "2%",
        ease: Power2,
      },
      "a"
    )
    .to(".videoContainer", {
      opacity: "0",
    })

    .to(
      ".rightMove .heroRow",
      {
        xPercent: -10,
        ease: Power2,
      },
      "b"
    )
    .to(
      ".leftMove .heroRow",
      {
        xPercent: 10,
        ease: Power2,
      },
      "b"
    );

  let clutter = "";
  let text = document.querySelector(".topmarque h1").textContent;
  let splitText = text.split("").forEach((letter) => {
    clutter += `<span>${letter}</span>`;
  });
  document.querySelector(".topmarque h1").innerHTML = clutter;
  gsap.set(".marqueContainer ", {
    scale: 9,
  });
  gsap.from(
    ".topmarque span",
    {
      color: "#000",
      stagger: 0.1,
    },
    "b"
  );

  // top marque
}

function craftPageAnimation() {
  let headings = document.querySelectorAll(".leftCraft h1").forEach((head) => {
    let splithead = head.textContent.split("");
    var clutter = "";
    splithead.forEach((word) => {
      clutter += `<span>${word}</span>`;
    });
    head.innerHTML = clutter;
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".craftPage",
      start: "top -20%",
      end: "top -150%",
      scrub: 1,
      // markers: true,
    },
  });
  tl.from(".leftCraft h1 span", {
    stagger: 0.2,
    opacity: 0,
    marginTop: "50vh",
    ease: Power2,
    scrollTrigger: {
      trigger: ".craftPage",
      start: "top top",
      end: "top -10%",
      scrub: 2,
    },
  })
    .to(".rightCraft .rightInfo:nth-Child(1)", {
      scale: "1.1",
      color: "white",
      backgroundColor: "#000",
    })
    .to(".rightCraft .rightInfo:nth-Child(2)", {
      scale: "1.1",
      color: "white",
      backgroundColor: "#000",
    })
    .to(".rightCraft .rightInfo:nth-Child(3)", {
      scale: "1.1",
      color: "white",
      backgroundColor: "#000",
    })
    .to(".rightCraft .rightInfo:nth-Child(4)", {
      scale: "1.1",
      color: "white",
      backgroundColor: "#000",
    });
}

function RealTalkPageAnime() {
  gsap.to(".slides .slide", {
    scrollTrigger: {
      trigger: ".RealTalk",
      start: "top top",
      end: "bottom 100%",
      scrub: 2,
      // markers:true
    },
    xPercent: -300,
  });
}

function OurTeam() {
  document.querySelectorAll(".listItems .list").forEach(function (list) {
    list.addEventListener("mousemove", function (det) {
      gsap.to(this.querySelector(".picture"), {
        scale: 1,
        opacity: 1,
        ease: Power2,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, det.clientX),
        duration: 0.1,
      });
    });

    list.addEventListener("mouseleave", function (det) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        scale: 0,
        ease: Power2,
        duration: 0.1,
      });
    });
  });
}

function TextPage() {
  var page = document.querySelectorAll(".textPage .left p").forEach((para) => {
    var clutter = "";
    para.textContent.split("").forEach((word) => {
      clutter += `<span>${word}</span>`;
    });
    para.innerHTML = clutter;
  });

  gsap.set(".textPage .left p span", {
    opacity: 0.1,
  });
  gsap.to(".textPage .left:nth-Child(1) p span", {
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".textPage",
      start: "top 10%",
      end: "top -30%",
      scrub: 2,
      // markers:true
    },
  });
  gsap.to(".textPage .left:nth-Child(2) p span", {
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".textPage",
      start: "top -20%",
      end: "top -70%",
      scrub: 2,
      // markers:true
    },
  });
}

document.querySelectorAll(".section").forEach(section=>{
  ScrollTrigger.create({
    trigger : section,
    start : "top 50%",
    end :"bottom 50%",
    markers:true,
    onEnter :function(){
      document.body.setAttribute("theme",section.dataset.theme)
    },
    onEnterBack:function(){
      document.body.setAttribute("theme",section.dataset.theme)

    }
  })
})


function capsule() {
  gsap.set('.right .hilnewala',{y:50})
  gsap.to(".right .hilnewala", {
    scrollTrigger: {
      trigger: ".exploreInsights",
      start: "top 40%",
      end: "top 0%",
      scrub: 2,
      // markers : true
    },
    y:-50
   
  });
}





homepageAnime();
craftPageAnimation();
RealTalkPageAnime();
OurTeam();
TextPage();
capsule();