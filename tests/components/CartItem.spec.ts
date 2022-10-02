import { shallowMount } from '@vue/test-utils'
import CartItem from '@/components/CartItem.vue'

describe('CartItem component', () => {
    it('should render Cart Item header', () => {
        const header = 'Cart Item'
        const wrapper = shallowMount(CartItem)
        expect(wrapper.text()).toMatch(header)
    })
})
