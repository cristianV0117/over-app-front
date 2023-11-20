import SideBar from "../../components/layout/SideBar"
import {useEffect, useState} from "react"
import Pusher from '../../core/pusher'
import {toast, ToastContainer} from 'react-toastify'

const dashboard = () => {

    const [notification, setNotification] = useState([])

    useEffect(() => {
        const channel = Pusher.subscribe('NOTIFICATION_TO_WEBSOCKET');
        channel.bind('TaskNotificationBroadCast', function(data: any) {
            toast.success(data.message.eventDescription);
        })
    }, []);

    return (
        <>
            <h1>dashboard</h1>
            <SideBar />
            <ToastContainer />
        </>
    )
}

export default dashboard