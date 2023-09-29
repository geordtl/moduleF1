// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default {
    plugins: [
        federation({
            name: 'remote-app',
            filename: 'remoteEntry.js',
            remotes: {
                remote_app: "http://localhost:3000/remoteEntry.js",
            },
            // Modules to expose
            exposes: {
                './Button': './components/Button.vue',
            },
            shared: ['vue']
        })
    ]
}