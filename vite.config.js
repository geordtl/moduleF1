// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default {
    plugins: [
        federation({
            name: 'remote-app',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './Button': './components/Button.vue',
            },
            shared: ['vue']
        })
    ]
}