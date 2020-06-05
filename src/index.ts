import { Observable, timer, interval } from 'rxjs'
import { loopForever } from './util'
import { merge, mergeMap, mergeMapTo, tap, map } from 'rxjs/operators'
import { A4, halfStep } from './notes'

const C = halfStep(A4, -9)
const D = halfStep(C, 2)
const G = halfStep(A4, -2)

const loop = loopForever([C, D, G])

const aTimer = interval(1000).
  pipe(
      map(() => loop()),
      tap(freq => console.log(new Date(), freq))    
    )

const audioCtx = new AudioContext()
let oscillator = audioCtx.createOscillator()
oscillator.connect(audioCtx.destination)

aTimer.subscribe(freq => oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime))
oscillator.start()
