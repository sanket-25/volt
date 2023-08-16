var flag = 0;
var menu = document.querySelector('#menu');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
menu.addEventListener('click', () => {
  if (flag === 0) {
    document.getElementById('topmenu').style.transform = `translateY(0)`
    line1.style.backgroundColor = `#232025`;
    line2.style.backgroundColor = `#232025`;
    line1.style.transform = `rotate(40deg)`;
    line1.style.width = `70%`;
    line2.style.transform = `rotate(-40deg)`;
    line2.style.backgroundColor = `#232025`;
    document.getElementById('navv').style.color = `#232025`;
    flag = 1;
  }
  else {
    document.getElementById('topmenu').style.transform = `translateY(-100%)`
    line1.style.backgroundColor = `#cecece`;
    line2.style.backgroundColor = `#cecece`;
    line1.style.transform = `rotate(00deg)`;
    line1.style.width = `100%`;
    line2.style.transform = `rotate(-0deg)`;
    line2.style.backgroundColor = `#cecece`;
    document.getElementById('navv').style.color = `#cecece`;
    flag = 0;
  }
})
















// GSAP
// var t1 = gsap.timeline();

// t1
// 	.from(".nav",{
// 		y:-20,
// 		duration: 2
// 	})
// 	.from(".quote",{
// 		y:-20,
// 		x:-10,
// 		duration: 2,
// 		opacity: 0,
// 		delay: -1
// 	})



const tl = gsap.timeline();

tl
	// .from(".nav-a", {
	// 	onStart: function(){
	// 		$('.nav-a').textillate({
	// 			in: {effect: 'fadeInUp'}
	// 		})
	// 	}
	// })
	// .from(".nav-a-b", {
	// 	onStart: function(){
	// 		$('.nav-a-b').textillate({
	// 			in: {effect: 'fadeInUp'}
	// 		})
	// 	}
	// })
	.from('.quote', {
  duration: 2,
  opacity: 0,
  onStart: function () {
    $(document).ready(function () {
      $('.quote').textillate({ in: { effect: 'fadeInUp' } });
    })
  }
})

// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".about-text-p", {
// 	delay: 1,
// 	y: 100,
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: ".about-text-p",
// 		markers: true,
// 		start: "top 80%",
// 		end: "center 10%",
// 		scrub: 3


// 	}
// })

gsap.to(".v1", {
	opacity: 0,
	scrollTrigger: {
		trigger: "#Main",
		// markers: true,
		start: "top 100%",
		end: "top 0%",
		scrub: 2
	},
	css: { height: 0 }
})
gsap.to(".v2", {
	opacity: 0,
	scrollTrigger: {
		trigger: "#Main",
		// markers: true,
		start: "top 100%",
		end: "top 0%",
		scrub: 2
	},
	css: { height: 0 }
})
gsap.to(".h1", {
	// x: 1000,
	opacity: 0,
	duration: 1,
	scrollTrigger: {
		trigger: "#Home",
		// markers: true,
		start: "center 45%",
		end: "top 0%",
		scrub: true
	}
})

gsap.to(".nav-a", {
	opacity: 0,
	duration: 1,
	x: 100,
	scrollTrigger: {
		trigger: "#Home",
		// markers: true,
		start: "center 45%",
		end: "top 0%",
		scrub: true
	}
})
gsap.to(".nav-a-b", {
	// opacity: 0,
	duration: 1,
	x: 100,
	scrollTrigger: {
		trigger: "#Home",
		// markers: true,
		start: "center 45%",
		end: "top 0%",
		scrub: true
	}
})

gsap.to(".v1", {
	opacity: 0,
	duration: 1,
	x: 100,
	scrollTrigger: {
		trigger: "#Main",
		// markers: true,
		start: "center 100%",
		end: "center 0%",
		scrub: 2
	}
})

gsap.from('.about-text div', {
  // duration: 0.2,
  opacity: 0,
  rotateX: 0,
  transform: 'translateX(0%)',
  scrollTrigger: {
    trigger: '.about-text-p',
    // scroller: '#bg',
    scrub: 2,
    end: 'top 10%',
    // markers:true,
    start: 'top 60%',
  },
});

gsap.from('.about-text-p', {
  // duration: 0.2,
  opacity: 0,
  rotateX: 0,
  onStart: function(){
			$('.nav-a-b').textillate({
				in: {effect: 'bounceInDown'}
			})
		},
  transform: 'translateX(0%)',
  scrollTrigger: {
    trigger: '.about-text-p',
    // scroller: '#bg',
    scrub: 2,
    end: 'top 10%',
    // markers:true,
    start: 'top 60%',
  },
});


gsap.from('.events', {
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: '.events',
    // scroller: '#bg',
    scrub: true,
    end: 'top 40%',
    // markers:true,
    start: 'top 80%',
  },
});
gsap.from('.features', {
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: '.features',
    // scroller: '#bg',
    scrub: true,
    end: 'top 40%',
    // markers:true,
    start: 'top 80%',
  },
});
gsap.from('.training', {
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: '.training',
    // scroller: '#bg',
    scrub: true,
    end: 'top 40%',
    // markers:true,
    start: 'top 80%',
  },
});
gsap.from('.social', {
  duration: 0,
  opacity: 0,
  // x: 1000,
  // rotate: 360,
  scrollTrigger: {
    trigger: '.social',
    // scroller: '#bg',
    // scroller: body,
    scrub: true,
    end: 'top 40%',
    // markers:true,
    start: 'top 80%',
  },
});