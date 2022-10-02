import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App component', () => {
    it('should render Grocery header', () => {
        const header = 'Grocery'
        const wrapper = shallowMount(App)
        expect(wrapper.text()).toMatch(header)
    })
})
