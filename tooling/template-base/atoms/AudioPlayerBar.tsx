import React, { useEffect, useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import ReactAudioPlayer from 'react-audio-player';

export default function TopicAudioPlayer({ keyName }: { keyName: string }) {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    fetch('/learn/audio?key=' + keyName)
      .then(res => res.json())
      .then(result => {
        setPath(result.path);
      });
  }, [keyName]);

  if (path) {
    return <ReactAudioPlayer src={path} autoPlay controls />;
  }

  return null;
}
