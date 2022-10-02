import findFoodById from '@/utilities/findFoodById'

describe('findFoodById utility', () => {
    it('should be a function', () => {
        expect(typeof findFoodById).toBe('function')
    })
})
