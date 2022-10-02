import { shallowMount } from '@vue/test-utils'
import CheckoutItem from '@/components/CheckoutItem.vue'

describe('CheckoutItem component', () => {
    it('should render Checkout Item header', () => {
        const header = 'Checkout Item'
        const wrapper = shallowMount(CheckoutItem)
        expect(wrapper.text()).toMatch(header)
    })
})
