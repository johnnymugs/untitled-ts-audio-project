import { Observable, timer } from 'rxjs'

const loop = new Observable<number>(sub => {
    const values = [327, 440]
    timer(0,1000).subscribe({
        next: n => {
            const i = n % 2
            sub.next(values[i])
        }
    })
})

const audioCtx = new AudioContext()
let oscillator = audioCtx.createOscillator()
oscillator.connect(audioCtx.destination)
oscillator.start()

loop.subscribe(freq => oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime))