// import { useSocketContext } from '../../context/SocketContext';
// import useConversation from '../../zustand/useConversation';

// const Conversation = ({ conversation, lastIdx }) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();

//   const isSelected = selectedConversation?._id === conversation._id;
//   const { onlineUsers } = useSocketContext();
//   const isOnline = onlineUsers.includes(conversation._id);

//   return (
//     <>
//       <div
//         className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
// 				${isSelected ? 'bg-sky-500' : ''}
// 			`}
//         onClick={() => setSelectedConversation(conversation)}
//       >
//         <div className={`avatar ${isOnline ? 'online' : ''}`}>
//           <div className="w-12 rounded-full">
//             <img src={conversation.profilePic} alt="user avatar" />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">{conversation.fullName}</p>
//             {/* <span className='text-xl'>{emoji}</span> */}
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className="divider my-0 py-0 h-1" />}
//     </>
//   );
// };
// export default Conversation;

import { useState, useEffect } from 'react';
import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (!isOnline && selectedConversation?._id === conversation._id) {
      callMockSendMessage(conversation);
      setMessageSent(true);
    }
  }, [isOnline, selectedConversation, conversation]);

  const handleSelectConversation = () => {
    setSelectedConversation(conversation);
    setMessageSent(false);
  };

  const callMockSendMessage = () => {
    console.log(
      `Mock Message Sent to sender: I am currently busy. Can we chat later?`
    );
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${selectedConversation?._id === conversation._id ? 'bg-sky-500' : ''}
			`}
        onClick={handleSelectConversation}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}

      {messageSent && !isOnline && (
        <div className="text-red-400 text-sm ml-2">
          I am currently busy. Can we chat later?
        </div>
      )}
    </>
  );
};

export default Conversation;

// import { useState, useEffect } from 'react';
// import { useSocketContext } from '../../context/SocketContext';
// import useConversation from '../../zustand/useConversation';
// import useSendMessage from '../../hooks/useSendMessage';

// const Conversation = ({ conversation, lastIdx }) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const { onlineUsers } = useSocketContext();
//   const isOnline = onlineUsers.includes(conversation._id);
//   const [message, setMessage] = useState('');
//   const { loading, sendMessage } = useSendMessage();

//   const handleSubmit = async () => {

//     await sendMessage(message);

//   };

//   const [messageSent, setMessageSent] = useState(false);

//   useEffect(() => {

//     if (!isOnline && selectedConversation?._id === conversation._id) {

//       callMockSendMessage(conversation);
//       setMessageSent(true);
//     }
//   }, [isOnline, selectedConversation, conversation]);

//   const handleSelectConversation = () => {
//     setSelectedConversation(conversation);
//     setMessageSent(false);
//   };

//   const handleSendMessage = () => {
//     if (!isOnline) {
//       sendMessageToSender();
//       setMessageSent(true);
//   };

//   const callMockSendMessage = () => {

//     setMessage(
//       ' Recever is currently busy. Can we chat later?'
//     );

//     handleSubmit();
//   };

//   const sendMessageToSender = () => {

//     console.log(
//       `Message Sent to sender: I am currently busy. Can we chat later?`
//     );
//   };

//   return (
//     <>
//       <div
//         className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
// 				${selectedConversation?._id === conversation._id ? 'bg-sky-500' : ''}
// 			`}
//         onClick={handleSelectConversation}
//       >
//         <div className={`avatar ${isOnline ? 'online' : ''}`}>
//           <div className="w-12 rounded-full">
//             <img src={conversation.profilePic} alt="user avatar" />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">{conversation.fullName}</p>
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className="divider my-0 py-0 h-1" />}

//       {messageSent && !isOnline && (
//         <div className="text-gray-500 text-sm ml-2">
//           Message Sent to Sender: I am currently busy. Can we chat later?
//         </div>
//       )}

//       {isOnline && (
//         <button
//           className="text-blue-500 hover:text-blue-700"
//           onClick={handleSendMessage}
//         >
//           Send Message
//         </button>
//       )}
//     </>
//   );
// };

// export default Conversation;
