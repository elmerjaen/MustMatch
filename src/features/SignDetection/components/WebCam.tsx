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
    <div>
      <Webcam
        onLoadedData={onWebCamLoad}
        audio={false}
        id="img"
        ref={webCamRef}
        screenshotQuality={1}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <div style={{ position: 'absolute', top: '400px', zIndex: '9999' }}>
        <canvas
          ref={canvasRef}
          id="myCanvas"
          width={width}
          height={height}
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default WebCam;
