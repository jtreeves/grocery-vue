import {
    mount,
    VueWrapper
} from '@vue/test-utils'
import {
    ComponentPublicInstance
} from 'vue'
import {
    createRouter,
    createMemoryHistory,
    Router
} from 'vue-router'
import routes from '@/router/routes'
import App from '@/App.vue'

describe('App component', () => {
    const router: Router = createRouter({ 
        history: createMemoryHistory(),
        routes 
    })
    
    const wrapper: VueWrapper<ComponentPublicInstance> = mount(App, { 
        global: {
            plugins: [router]
        }
    })

    it('should display Grocery header', () => {
        expect(wrapper.text()).toMatch('Grocery')
    })
})
