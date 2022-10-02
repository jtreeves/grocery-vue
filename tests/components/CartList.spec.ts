import { shallowMount } from '@vue/test-utils'
import CartList from '@/components/CartList.vue'

describe('CartList component', () => {
    it('should render Cart Item header', () => {
        const header = 'Cart Item'
        const wrapper = shallowMount(CartList)
        expect(wrapper.text()).toMatch(header)
    })
})
