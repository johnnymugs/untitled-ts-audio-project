const audioContext = new AudioContext()
let oscillator = audioContext.createOscillator()
oscillator.frequency.setValueAtTime(1635, audioContext.currentTime)
oscillator.connect(audioContext.destination)
oscillator.start()
