
import DashboardPage from '../views/Dashboard/Dashboard'
import UserPage from '../views/Property/Property'

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: 'Dashboard',
        component: DashboardPage,
        layout: '/admin'
    },
    {
        path: "/property",
        name: 'Property',
        component: UserPage,
        layout: '/admin'
    }
]

export default dashboardRoutes;