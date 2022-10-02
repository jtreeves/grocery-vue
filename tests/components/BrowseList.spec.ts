import { shallowMount } from '@vue/test-utils'
import BrowseList from '@/components/BrowseList.vue'

describe('BrowseList component', () => {
    it('should render Browse List header', () => {
        const header = 'Browse List'
        const wrapper = shallowMount(BrowseList)
        expect(wrapper.text()).toMatch(header)
    })
})
