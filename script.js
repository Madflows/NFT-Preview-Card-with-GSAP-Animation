gsap.from('.card', {
    duration: 1,
    y: '-20%', //From the Y Axis
    opacity: 0,
    delay: 0.7,
})

gsap.from('.mainText', {
    duration: 1,
    y: '-50%',
    delay: 1,
    opacity: 0,
})
// I'm about to copy and past ethe other code
gsap.from('.subText', {
    duration: 1.5,
    x: '10%',
    opacity: '0',
    delay: 1,
})

gsap.from('.portfolio .amount', {
    duration: 1,
    x: '-20%',
    opacity: '0',
    delay: 2,
})

gsap.from('.portfolio .days', {
    duration: 1,
    x: '20%',
    opacity: '0',
    delay: 2,
})


console.log("Don't Forget to Like and Subscribe!");