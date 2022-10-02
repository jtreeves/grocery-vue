import { shallowMount } from '@vue/test-utils'
import ResultsPage from '@/views/ResultsPage.vue'

describe('ResultsPage view', () => {
    it('should render Results header', () => {
        const header = 'Results'
        const wrapper = shallowMount(ResultsPage)
        expect(wrapper.text()).toMatch(header)
    })
})
