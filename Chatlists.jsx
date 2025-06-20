import React from 'react'

const Chatlists = ({ chats }) => {
    const user = localStorage.getItem('user')
    function SenderChat({message,username,avatar}) {
        return (
            <div className='chat_sender'>
                <img src={avatar} alt="" />
                <p>
                    <strong>{user}</strong>
                    {message}
                </p>
            </div>
        )
    }
    function ReceiverChat({ message, username, avatar }) {
        return (
            <div className='chat_row receiver'>
                <img src={avatar} alt="" className='chat_image' />
                <p>
                    <strong>User-2</strong>
                    {message}
                </p>
            </div>
        )
    }
    return (
        <div className='chats_list'>
            {
                chats.map((chat, index) => {
                    if (chat.user === user) {
                        return <SenderChat
                            key={index}
                            message={chat.message}
                            username={chat.user}
                            avatar={chat.avatar} />
                    }
                    else {
                        return <ReceiverChat
                            key={index}
                            message={chat.message}
                            username={chat.user}
                            avatar={chat.avatar} />
                    }

                })
            }


        </div>
    )
}

export default Chatlists
