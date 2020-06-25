import React from 'react';
const p2plex = require('p2plex');

export const P2Plex = () => {
  const plex1 = p2plex();
  const plex2 = p2plex();

  plex1.on('connection', peer => {
    peer.receiveStream('example').on('data', data => {
      console.log('Got data from', peer.publicKey, ':', data.toString('utf8'));
      plex1.destroy();
      plex2.destroy();
    });
  });

  plex2.findByPublicKey(plex1.publicKey).then(peer => {
    peer.createStream('example').end('Hello World!');
  });
  return <></>;
};
