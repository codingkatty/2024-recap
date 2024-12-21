const spring = {
    "particles": {
        number: { value: 15 },
        shape: {
            type: "image",
            image: { src: "images/flower.png" }
        },
        size: { value: 20 },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true
        },
        line_linked: {
            enable: true,
            color: "#ffd1e4"
        }
    }
};

const summer = {
    "particles": {
        number: { value: 15 },
        shape: {
            type: "image",
            image: { src: "images/leaf.png" }
        },
        size: { value: 20 },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true
        },
        line_linked: {
            enable: true,
            color: "#fee982"
        }
    }
};

const autumn = {
    "particles": {
        number: { value: 15 },
        shape: {
            type: "image",
            image: { src: "images/maple.png" }
        },
        size: { value: 20 },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true
        },
        line_linked: {
            enable: true,
            color: "#b65515"
        }
    }
};

const winter = {
    "particles": {
        number: { value: 15 },
        shape: {
            type: "image",
            image: { src: "images/snow.png" }
        },
        size: { value: 20 },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            random: true
        },
        line_linked: {
            enable: true,
            color: "#92d2f2"
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-spring", spring);
    particlesJS("particles-summer", summer);
    particlesJS("particles-autumn", autumn);
    particlesJS("particles-winter", winter);
});

// Reffered to tutorial: https://medium.com/@sanjeevyadavIT/card-stack-scroll-effect-486cc3b55312

window.addEventListener('scroll', onScroll, false);

var sectionOne = document.querySelector('#spring');
var sectionTwo = document.querySelector('#summer');
var sectionThree = document.querySelector('#autumn');
var sectionForth = document.querySelector('#winter');

var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];
var SectionThreeHeight = getComputedStyle(sectionThree).height.split('px')[0];
var SectionForthHeight = getComputedStyle(sectionForth).height.split('px')[0];

var checkPointOne = parseFloat(SectionOneHeight);
var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);

function onScroll() {
    var scrollBarPosition = window.scrollY | document.body.scrollTop
    if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
        console.log('sectionOne')
        removeClass(sectionTwo, sectionThree)
    } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
        console.log('sectionTwo')
        addClass(sectionTwo, sectionThree, checkPointTwo)
        removeClass(sectionThree, sectionForth)
    } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
        console.log('sectionThree')
        addClass(sectionThree, sectionForth, checkPointThree)
    }
}

function addClass(elemOne, elemTwo, margin) {
    elemOne.classList.add('fixed');
    elemTwo.style.marginTop = (margin) + 'px';
}

function removeClass(elemOne, elemTwo) {
    elemOne.classList.remove('fixed');
    elemTwo.style.marginTop = '0px';
}