import { shallowMount } from '@vue/test-utils'
import BrowseItem from '@/components/BrowseItem.vue'

describe('BrowseItem component', () => {
    it('should render Product Highlight header', () => {
        const header = 'Product Highlight'
        const wrapper = shallowMount(BrowseItem)
        expect(wrapper.text()).toMatch(header)
    })
})
