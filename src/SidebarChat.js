import React, { useEffect  , useState } from 'react'
import {Avatar} from "@material-ui/core"
import "./SidebarChat.css"
import {Link} from "react-router-dom"
import firebaseApp from "./firebase"

function SidebarChat({id, name ,addNewChat}) {

    const [seed , setSeed] = useState("")
    const [message , setMessage] = useState([])
    useEffect(() => {
        if(id){
            firebaseApp.firestore().collection('rooms').doc(id).collection('messages').orderBy('timestamp' , 'desc')
            .onSnapshot(snapshot => (
                    setMessage(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    } , [id])


    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    } , [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName) {
            //
            firebaseApp.firestore().collection("rooms").add({
                name : roomName ,
                
            })
        }

    }

    return  !addNewChat ? (
        <Link to={`/rooms/${id}`}> 

        <div className="sidebarChat" >
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info" >
                 <h2>{name}</h2>
                <p>{message[0]?.message}</p>
            </div>
        </div>
        </Link>
        
    ) : ( 
        <div onClick={createChat} className="sidebarChat" >
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
