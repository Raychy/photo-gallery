import { createRouter, createWebHistory } from 'vue-router'
import Feeds from '@/views/Feeds.vue'
import EditScreen from '@/views/EditScreen.vue'
import Animals from '@/views/Animals.vue'
import Technology from '@/views/Technology.vue'
import Food from '@/views/Food.vue'
import Nature from '@/views/Nature.vue'
import Building from '@/views/Building.vue'
import Sport from '@/views/Sport.vue'
import Car from '@/views/Car.vue'


const routes = [
    {
        path: '/',
        name: 'Feeds',
        component: Feeds
    },
    
    {
        path: '/edit',
        name: 'EditScreen',
        component: EditScreen
    },
    {
        path: '/animals',
        name: 'Animals',
        component: Animals
    },
    {
        path: '/technology',
        name: 'Technology',
        component: Technology
    },
    {
        path: '/nature',
        name: 'Nature',
        component: Nature
    },
    {
        path: '/sport',
        name: 'Sport',
        component: Sport
    },
    {
        path: '/buildings',
        name: 'Building',
        component: Building
    },
    {
        path: '/food',
        name: 'Food',
        component: Food
    },
    {
        path: '/cars',
        name: 'Car',
        component: Car
    },
]
const router = createRouter({ history: createWebHistory(), routes })
export default router