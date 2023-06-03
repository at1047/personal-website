import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ProjectIndexPage from '@/views/ProjectIndexPage.vue'
import ProjectDetailsPage from '@/views/ProjectDetailsPage.vue'
// import BlogPage from '@/views/BlogPage.vue'
import RecipePage from '@/views/RecipePage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectPage,
        },
        //      {
        //          path: '/blog',
        //          name: 'Blog',
        //          component: BlogPage,
        //      },
        {
            path: '/recipes',
            name: 'Recipes',
            component: RecipePage,
        },
        {
            path: '/projects/:projectName',
            name: 'ProjectIndex',
            component: ProjectIndexPage,
            meta: {
                breadcrumb: "/",
                breadcrumb2: "/projects",
            }
        },
        {
            path: '/projects/:projectName/:blogName',
            name: 'ProjectDetails',
            component: ProjectDetailsPage,
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
