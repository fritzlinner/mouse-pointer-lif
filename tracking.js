const position = []
const dot = documents.getElementById('dot')
const isRecording = false
const isReplaying = false
document.body.addEventListener('mousemove', (ev) => {
    console.log(ev)
 if (isRecording) {

 document.getElementById('mousex').textContent = ev.pageX
    document.getElementById('mousey').textContent = ev.pageX
    const pos = {
        x: ev.pageX,
        y: ev.pageY,
        t: Date.now()
    }
    position.push(pos)}
})
document.onkeyup = (ev) => {
    if (ev.key === 'Enter') {
        isReplaying = true
        showFakecursor()
    }
}
const showFakecursor = () => {
    if (position.lengh >= 2) {
        const pos = position.shift()
        dot.style.left = pos.x + 'px'
        dot.style.top = pos.y + 'px'
        const dt = position[0].t - pos.t;
       if (isReplaying) { window.setTimeout(showFakecursor, dt)}
    }
}
