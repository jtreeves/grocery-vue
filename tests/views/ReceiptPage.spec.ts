import { shallowMount } from '@vue/test-utils'
import ReceiptPage from '@/views/ReceiptPage.vue'

describe('ReceiptPage view', () => {
    it('should render Receipt header', () => {
        const header = 'Receipt'
        const wrapper = shallowMount(ReceiptPage)
        expect(wrapper.text()).toMatch(header)
    })
})
