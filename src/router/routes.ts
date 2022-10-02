import {
    RouteRecordRaw
} from 'vue-router'
import root from './root'
import homeRoute from './homeRoute'
import browseRoute from './browseRoute'
import cartRoute from './cartRoute'

const routes: Array<RouteRecordRaw> = [
    root,
    homeRoute,
    browseRoute,
    cartRoute
]

export default routes
