import { loopForever } from "./util"
import { take, toArray } from 'rxjs/operators'

describe('loopForever', () => {
    it('creates a pull function from an array that repeats forever', ()=> {
        const ary = [1, 2]
        const pull = loopForever(ary)
        expect(pull()).toEqual(1)
        expect(pull()).toEqual(2)
        expect(pull()).toEqual(1)
    })
})