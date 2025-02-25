// import { VideoFeed } from './VideoFeed';
import { FunctionComponent } from 'react';
import { useChatConnection } from '../hooks/useChatConnection.tsx';
import { usePeerConnection } from '../hooks/usePeerConnection.tsx';
import { VideoFeed } from './VideoFeed.tsx';
// import { useChatConnection } from './useChatConnection';
// import { usePeerConnection } from './usePeerConnection.tsx';

interface Props {
  localStream: MediaStream;
}

export const VideoChatRoom: FunctionComponent<Props> = ({ localStream }) => {
  const { peerConnection, guestStream } = usePeerConnection(localStream);
  useChatConnection(peerConnection);

  console.log('ggg:>', guestStream, localStream);

  return (
    <div>
      <VideoFeed mediaStream={localStream} isMuted={true} />
      {guestStream && (
        <div>
          guest
          <VideoFeed mediaStream={guestStream} />
        </div>
      )}
    </div>
  );
};
