import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ProjectIndexPage from '@/views/ProjectIndexPage.vue'
import ProjectDetailsPage from '@/views/ProjectDetailsPage.vue'
import EditorPage from '@/views/EditorPage.vue'
import EditorMarkdownPage from '@/views/EditorMarkdownPage.vue'
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
        {
            path: '/editor',
            name: 'Editor',
            component: EditorPage,
        },
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
                home: "/",
                projects: "/projects",
            }
        },
        {
            path: '/projects/:projectName/:blogName',
            name: 'ProjectDetails',
            component: ProjectDetailsPage,
            meta: {
                home: "/",
                projects: "/projects",
            }
        },
        {
            path: '/editor/markdown',
            name: 'EditorMarkdownPage',
            component: EditorMarkdownPage,
            //meta: {
            //    home: "/",
            //    projects: "/projects",
            //}
        },
        //{
        //    path: '/editor/blogs/:blogName',
        //    name: 'EditorBlogs',
        //    component: ProjectIndexPage,
        //    meta: {
        //        home: "/",
        //        projects: "/projects",
        //    }
        //},
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
