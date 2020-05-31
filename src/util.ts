import { Observable } from 'rxjs'

export function loopForever<T>(ary: T[]): () => T {
    let i = 0
    return () => {
        let currVal = ary[i]
        i++
        if (i == ary.length) { i = 0 }

        return currVal
    }
}
