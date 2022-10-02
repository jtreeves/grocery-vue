import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe('AppFooter component', () => {
    it('should render copyright symbol', () => {
        const symbol = '©'
        const wrapper = shallowMount(AppFooter)
        expect(wrapper.text()).toMatch(symbol)
    })
})
