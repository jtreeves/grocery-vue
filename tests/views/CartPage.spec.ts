import { shallowMount } from '@vue/test-utils'
import CartPage from '@/views/CartPage.vue'

describe('CartPage view', () => {
    it('should render Cart header', () => {
        const header = 'Cart'
        const wrapper = shallowMount(CartPage)
        expect(wrapper.text()).toMatch(header)
    })
})
