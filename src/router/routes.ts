import {
    RouteRecordRaw
} from 'vue-router'
import root from './root'
import homeRoute from './homeRoute'
import resultsRoute from './resultsRoute'
import cartRoute from './cartRoute'
import receiptRoute from './receiptRoute'

const routes: Array<RouteRecordRaw> = [
    root,
    homeRoute,
    resultsRoute,
    cartRoute,
    receiptRoute
]

export default routes
