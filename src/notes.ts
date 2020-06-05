export const A4 = 440.00 // refrence tuning

const twelvethRootOf2 = Math.pow(2, 1/12)

export function halfStep(baseNote: number, numHalfSteps: number): number {
    return baseNote * Math.pow(twelvethRootOf2, numHalfSteps)
}