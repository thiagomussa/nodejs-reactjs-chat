import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
         <PrettyChatWindow
            projectId='b1570029-b96a-4227-93c6-6e3ddaf79bb4'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}   
        />
    </div>)          
}

export default ChatsPage 