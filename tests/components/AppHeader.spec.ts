import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader component', () => {
    it('should render Grocery header', () => {
        const header = 'Grocery'
        const wrapper = shallowMount(AppHeader)
        expect(wrapper.text()).toMatch(header)
    })
})
