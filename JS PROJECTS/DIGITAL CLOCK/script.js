let digitalClock = () => {
    let h2Tag = document.getElementsByTagName('h2')
    let dateobj = new Date()
    let time = dateobj.toLocaleTimeString()
    let date = dateobj.toLocaleDateString()
    let day = dateobj.toLocaleDateString('en-US', {weekday: 'long'})
    h2Tag[0].innerText = time
    h2Tag[1].innerText = date
    h2Tag[2].innerText = day

}
digitalClock()
setInterval(() => {
    digitalClock()
}, 1000)