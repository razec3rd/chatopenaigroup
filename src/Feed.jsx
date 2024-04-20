import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db, storage } from '../configs/firebase';
import { collection, doc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function createPost({ chatRoomId, user, title }) {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  // Function to send a post
  const sendPost = async () => {
    try {
      if (message.trim() === '') {
        return;
      }

      let downloadURL = null;

      // Check if an image is selected
      if (image) {
        // Upload the image to Firebase Storage
        const storageRef = ref(storage, `chat/${chatRoomId}/${Date.parse(new Date())}_${image.name}`);
        await uploadBytes(storageRef, image);
        downloadURL = await getDownloadURL(storageRef);
      }

      // Add a new post to the chat room
      await addDoc(collection(db, 'chat_message'), {
        message,
        senderName: user.displayName ?? user.email,
        senderId: user.uid,
        chatRoomId,
        image: downloadURL,
        timestamp: serverTimestamp()
      });

      setMessage('');
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link to='/'>Back</Link>
      <h1>{title}</h1>
      <input
        type='text'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type='file'
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={sendPost}>Post</button>
    </>
  );
}

export default createPost;