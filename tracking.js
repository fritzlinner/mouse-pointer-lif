
const positions = []
const dot = document.getElementById('dot')
const isRecording = false
const isReplaying = false
document.onmousemove = (ev) => {
    if (isRecording) {
        document.getElementById('mousex').textContent = ev.pageX
        document.getElementById('mousey').textContent = ev.pageY
        const pos = {
            x: ev.pageX,
            y: ev.pageY,
            t: Date.now()
        }
        positions.push(pos)
    }
}
document.onkeyup = (ev) => {
    if (ev.key === 'Enter') {
        isReplaying = true
        showFakeCursor()
    }
    if (ev.key === 's') {
        isReplaying = false
    }
    if (ev.key === 'b') {
        isRecording = true
    }
}

const showFakeCursor = () => {
    if (positions.length >= 2) {
        const pos = positions.shift()
        dot.style.left = pos.x + 'px'
        dot.style.top = pos.y + 'px'
        const dt = positions[0].t - pos.t;
        if (isReplaying) { window.setTimeout(showFakeCursor, dt) }
    }
}