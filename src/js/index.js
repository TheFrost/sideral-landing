import { TweenMax, TimelineMax, Expo } from 'gsap'

// tools
const isMobileDevice = () => new RegExp(/Mobi/i).test(window.navigator.userAgent)

// logic
const triggerEntry = () => {
  new TimelineMax()
    .staggerTo('.card__row-inner', 1, {
      y: 0,
      ease: Expo.easeOut
    }, 0.1)
}

const windowLoadHandler = () => {
  window.setTimeout(() => {
    TweenMax
      .to('.loader', 0.5, {
        autoAlpha: 0,
        ease: Expo.easeOut
      })
      .eventCallback('onComplete', triggerEntry)
  }, 1000)
}

const mouseMoveHandler = ({ clientX, clientY }) => {
  const x = (clientX / window.innerWidth) * 2 - 1
  const y = (clientY / window.innerHeight) * 2 - 1
  const factor = 5

  TweenMax
    .to('.card', 1, {
      rotateY: x * factor,
      rotateX: -y * factor
    })
}

const setupInitState = () => {
  TweenMax.set('.card__row-inner', { y: '100%' })
}

// bind events
window.addEventListener('load', windowLoadHandler)
if (!isMobileDevice()) window.addEventListener('mousemove', mouseMoveHandler)

// init
setupInitState()
