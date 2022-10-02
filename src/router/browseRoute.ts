import {
    RouteRecordRaw
} from 'vue-router'
import BrowsePage from '@/views/BrowsePage.vue'

const browseRoute: RouteRecordRaw = {
    path: '/browse',
    name: 'browse',
    component: BrowsePage
}

export default browseRoute
