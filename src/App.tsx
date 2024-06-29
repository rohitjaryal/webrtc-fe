import './App.css';
import { VideoChatRoom } from './components/VideoChatRoom.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalCameraStream } from './hooks/useLocalCameraStream.tsx';

function App() {
  const { localStream } = useLocalCameraStream();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="video-chat-room/:roomName"
            element={localStream && <VideoChatRoom localStream={localStream} />}
          />
        </Routes>
      </BrowserRouter>
      );
    </>
  );
}

export default App;
