// import { useState } from 'react';
// import AssignConfirm from './AssignConfirm';
import currencyFormatter from '../../../utils/currencyFormatter';
import { useMutation, QueryClient } from 'react-query';
import { JobAPI, ChatAPI } from '../../../api';

const AssignJobCard = ({ job, assignTo, chatId, onClose }) => {
  // const [showConfirm, setShowConfirm] = useState(false);
  const queryClient = new QueryClient();

  const { mutate: assignJob } = useMutation(
    () => JobAPI.assignJob(job._id, assignTo._id),
    {
      onSuccess: (newJob) => {
        queryClient.setQueryData('jobs', (old) => {
          if (!old) return [newJob];

          const jobCheck = old.find((job) => job._id === newJob._id);

          if (jobCheck) {
            return old.map((job) => (job._id === newJob._id ? newJob : job));
          }

          return [...old, newJob];
        });

        sendReferenceMessage({
          id: chatId,
          text: `${assignTo.name} has been assigned to ${job.title} job.`,
          job: newJob._id,
        });

        queryClient.setQueryData('ownActiveJobs', (old) => {
          console.log(old);

          if (!old) return [newJob];

          const jobCheck = old.find((job) => job._id === newJob._id);

          if (jobCheck) {
            return old.map((job) => (job._id === newJob._id ? newJob : job));
          }

          return [...old, newJob];
        });
      },
    }
  );

  const { mutate: sendReferenceMessage } = useMutation(
    ChatAPI.addReferenceMessage,
    {
      onSuccess: (newMessage) => {
        console.log(newMessage);
        queryClient.setQueryData('chats', (old) => {
          console.log(old);

          if (!old) {
            return [
              {
                _id: newMessage.chat,
                messages: [newMessage],
              },
            ];
          }

          const chat = old.find((chat) => chat._id === newMessage.chat);
          console.log(chat);

          if (chat) {
            chat.messages = [...chat.messages, newMessage];
            return chat;
          }

          return [...old];
        });

        queryClient.setQueriesData(['chat', newMessage.chat], (old) => {
          if (!old) {
            return {
              _id: newMessage.chat,
              messages: [newMessage],
            };
          }

          old.messages = [...old.messages, newMessage];

          return old;
        });

        onClose();
      },
    }
  );

  return (
    <div className="mx-2 flex min-w-[8rem] max-w-xs flex-col items-center py-2 pl-4 first:pl-0">
      <h3 className="text-gray-900">{job?.title}</h3>
      <span className="text-sm text-gray-700">
        {currencyFormatter(job?.budget)}
      </span>
      <div className="mt-1">
        <button
          className="mt-1 rounded-md bg-primary-500 py-0.5 px-2 text-sm font-medium text-white"
          onClick={() => {
            assignJob();
          }}
        >
          Assign
        </button>
      </div>

      {/* <AssignConfirm
        job={job}
        assignTo={assignTo}
        chatId={chatId}
        isOpen={showConfirm}
        // onClose={() => {
        //   setShowConfirm(false);
        //   onClose();
        // }}
      /> */}
    </div>
  );
};

export default AssignJobCard;
