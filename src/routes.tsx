import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'

export const ROUTES = Object.freeze({
  HOME: "/",
  ABOUT: "/about",
  SIGNUP: "/signup",
  LOGIN: "/login",
})

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: ROUTES.HOME,
    component: <Home />,
  },
  {
    type: "collapse",
    name: "About",
    key: "about",
    route: ROUTES.ABOUT,
    component: <About />,
  },
  {
    type: "collapse",
    name: "Signup",
    key: "signup",
    route: ROUTES.SIGNUP,
    component: <Signup />,
  },
  {
    type: "collapse",
    name: "Login",
    key: "login",
    route: ROUTES.LOGIN,
    component: <Login />,
  }
]

export default routes
