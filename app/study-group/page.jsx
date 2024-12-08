import ChatWindow from "./components/chatwindow/ChatWindow";
import "./style/styles.css";


const StudyGroup = () => {
    return (
        <div className="bg-header p-4 md:p-6">

            {/* Chat Window */}
            <ChatWindow />

        </div>
    );
};

export default StudyGroup;
