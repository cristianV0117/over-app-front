import Echo from "laravel-echo/dist/echo"
import Pusher from "pusher-js"

const echo = new Echo({
    host: "http://127.0.0.1:8000", //might need to add this to the env
    broadcaster: "pusher",
    client: Pusher,
    key: '985c4806-3935-453a-9f26-f0838696e0a9',
    port: 6001,
    forceTLS: false,
    disableStats: true,
});

export default echo;