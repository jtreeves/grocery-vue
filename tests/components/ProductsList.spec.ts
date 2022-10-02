import { shallowMount } from '@vue/test-utils'
import ProductsList from '@/components/ProductsList.vue'

describe('ProductsList component', () => {
    it('should render Products List header', () => {
        const header = 'Products List'
        const wrapper = shallowMount(ProductsList)
        expect(wrapper.text()).toMatch(header)
    })
})
