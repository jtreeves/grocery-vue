import {
    RouteRecordRaw
} from 'vue-router'
import ReceiptPage from '@/views/ReceiptPage.vue'

const receiptRoute: RouteRecordRaw = {
    path: '/receipt',
    name: 'receipt',
    component: ReceiptPage
}

export default receiptRoute
