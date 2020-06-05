import { A4, halfStep } from "./notes"

describe('halfStep', () => {
    describe('going up a half step', () => {
        it('changes the tone by a half step up', () => {
            const tone = halfStep(A4, 1).toFixed(2)
            expect(tone).toEqual("466.16") // A#
        })
    })
    describe('going down a half step', () => {
        it('changes the tone by a half step down', () => {
            const tone = halfStep(A4, -1).toFixed(2)
            expect(tone).toEqual("415.30") // G#
        })
    })
})
