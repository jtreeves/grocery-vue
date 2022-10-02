import { shallowMount } from '@vue/test-utils'
import ProductHighlight from '@/components/ProductHighlight.vue'

describe('ProductHighlight component', () => {
    it('should render Product Highlight header', () => {
        const header = 'Product Highlight'
        const wrapper = shallowMount(ProductHighlight)
        expect(wrapper.text()).toMatch(header)
    })
})
