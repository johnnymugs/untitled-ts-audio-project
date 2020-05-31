import { Observable, timer, interval } from 'rxjs'
import { loopForever } from './util'
import { merge, mergeMap, mergeMapTo, tap, map } from 'rxjs/operators'

const loop = loopForever([261.63, 293.66, 440.0])
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
