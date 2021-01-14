import { defineComponent } from 'vue'
import { RouterView, useRoute, useRouter, Router, RouteLocation } from 'vue-router'
import './style/main.scss'

export default defineComponent({
  name: 'App',
  setup() {
    const route: RouteLocation = useRoute()
    const router: Router = useRouter()
    const goHome: () => void = () => router.push('/')
    const goAbout: () => void = () => router.push('/about')
    return () => (
      <>
        <div id="nav">
          <a onClick={goHome}>Home</a>|<a onClick={goAbout}>About</a>
        </div>
        {route.fullPath}
        <RouterView />
      </>
    )
  }
})
