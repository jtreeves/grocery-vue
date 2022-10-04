import { shallowMount } from '@vue/test-utils'
import BrowsePage from '@/views/BrowsePage.vue'

describe('BrowsePage view', () => {
    it('should render All Products header', () => {
        const header = 'All Products'
        const wrapper = shallowMount(BrowsePage)
        expect(wrapper.text()).toMatch(header)
    })
})
