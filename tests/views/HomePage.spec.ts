import { shallowMount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage view', () => {
    it('should render Home header', () => {
        const header = 'Home'
        const wrapper = shallowMount(HomePage)
        expect(wrapper.text()).toMatch(header)
    })
})
