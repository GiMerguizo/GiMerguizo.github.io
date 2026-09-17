const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const acordeon = trigger.parentElement
    const isOpen = acordeon.classList.contains('open')
    const icon = trigger.querySelector('i')
    
    if (isOpen) {
      acordeon.classList.remove('open')
      icon.classList.remove('bi-chevron-up')
      icon.classList.add('bi-chevron-down')
    } else {
      acordeon.classList.add('open')
      icon.classList.remove('bi-chevron-down')
      icon.classList.add('bi-chevron-up')
    }
  })
})