import {
    RouteRecordRaw
} from 'vue-router'
import CartPage from '@/views/CartPage.vue'

const cartRoute: RouteRecordRaw = {
    path: '/cart',
    name: 'cart',
    component: CartPage
}

export default cartRoute
