import App from "./App"
import Home from "./routes/Home"

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },

]