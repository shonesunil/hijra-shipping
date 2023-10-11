import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import TransportationView from '../views/services/TransportationView.vue'
import FreightView from '../views/services/FreightView.vue'
import ContractLogisticsView from '../views/services/ContractLogisticsView.vue'
import CustomClearanceView from '../views/services/CustomClearanceView.vue'
import WarehousingView from '../views/services/WarehousingView.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/services/transportation',
    name: 'transportation',
    component: TransportationView
  },
  {
    path: '/services/freight',
    name: 'freight',
    component: FreightView
  },
  {
    path: '/services/contract-logistics',
    name: 'contract-logistics',
    component: ContractLogisticsView
  },
  {
    path: '/services/custom-clearance',
    name: 'custom-clearance',
    component: CustomClearanceView
  },
  {
    path: '/services/warehousing',
    name: 'warehousing',
    component: WarehousingView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page before leaving any route
  window.scrollTo(0, 0);
  next();
});

export default router
