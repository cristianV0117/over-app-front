import Pusher from "pusher-js";

//Pusher.logToConsole = true;

const pusher = new Pusher('2807587aefbd91c79a5d', {
    cluster: 'us2'
});

export default pusher