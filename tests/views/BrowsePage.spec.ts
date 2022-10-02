import { shallowMount } from '@vue/test-utils'
import BrowsePage from '@/views/BrowsePage.vue'

describe('BrowsePage view', () => {
    it('should render Results header', () => {
        const header = 'Results'
        const wrapper = shallowMount(BrowsePage)
        expect(wrapper.text()).toMatch(header)
    })
})
