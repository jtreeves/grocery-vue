import {
    RouteRecordRaw
} from 'vue-router'
import ResultsPage from '@/views/ResultsPage.vue'

const resultsRoute: RouteRecordRaw = {
    path: '/results',
    name: 'results',
    component: ResultsPage
}

export default resultsRoute
