import React from 'react';
import Webcam from 'react-webcam';

type Props = {
  height: number;
  width: number;
  webCamRef: React.RefObject<Webcam>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onWebCamLoad: React.ReactEventHandler<HTMLVideoElement>;
};

const WebCam = ({
  height,
  width,
  webCamRef,
  canvasRef,
  onWebCamLoad
}: Props) => {
  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'environment'
  };

  return (
    <div className="relative">
      <Webcam
        muted
        onLoadedData={onWebCamLoad}
        ref={webCamRef}
        videoConstraints={videoConstraints}
      />
      <canvas
        style={{ position: 'absolute', top: '0' }}
        ref={canvasRef}
        width={width}
        height={height}
      />
    </div>
  );
};

export default WebCam;
