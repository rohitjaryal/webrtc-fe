import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../libs/socket.ts';

export function useOfferSending(peerConnection: RTCPeerConnection) {
  const { roomName } = useParams();

  const sendOffer = useCallback(async () => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    socket.emit('send_connection_offer', {
      roomName,
      offer,
    });
  }, [roomName]);

  return { sendOffer };
}
