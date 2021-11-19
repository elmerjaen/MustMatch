import * as tf from '@tensorflow/tfjs';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import drawRect from '../../../utils/drawLabels';
import WebCam from './WebCam';

const model = await tf.loadGraphModel(
  'https://2021tensorflowjsrealtimemodel2021.s3.us-south.cloud-object-storage.appdomain.cloud/model.json'
);

const SignDetection = () => {
  const [webCamLoaded, setWebCamLoaded] = useState(false);
  const webCamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoWidth, setVideoWidth] = useState(640);
  const [videoHeight, setVideoHeight] = useState(480);

  useEffect(() => {
    const prediction = async () => {
      setVideoHeight(webCamRef?.current?.video?.videoHeight as number);

      setVideoWidth(webCamRef?.current?.video?.videoWidth as number);

      const webCamImage = tf.browser.fromPixels(
        webCamRef.current?.video as HTMLVideoElement
      );

      const resized = tf.image.resizeBilinear(webCamImage, [640, 480]);

      const casted = resized.cast('int32');

      const expanded = casted.expandDims(0);

      const tensorMap = await model.executeAsync(expanded);

      if (Array.isArray(tensorMap)) {
        const boxes = await tensorMap[1]?.array();

        const classes = await tensorMap[2]?.array();

        const scores = await tensorMap[4]?.array();

        const canvasContext = canvasRef.current?.getContext(
          '2d'
        ) as CanvasRenderingContext2D;

        requestAnimationFrame(() => {
          drawRect({
            boxes: (boxes as number[][]) || [[]],
            classes: (classes as number[]) || [],
            scores: (scores as number[]) || [],
            threshold: 0.8,
            imgHeight: videoHeight,
            imgWidth: videoWidth,
            canvasContext
          });
        });

        tf.dispose(webCamImage);
        tf.dispose(resized);
        tf.dispose(casted);
        tf.dispose(expanded);
        tf.dispose(tensorMap);
      }
    };

    const predictionInterval = setInterval(() => {
      if (webCamLoaded) prediction();
    }, 16.7);

    return () => clearInterval(predictionInterval);
  }, []);

  return (
    <div>
      <WebCam
        onWebCamLoad={() => {
          setWebCamLoaded(true);
        }}
        canvasRef={canvasRef}
        webCamRef={webCamRef}
        height={videoHeight}
        width={videoWidth}
      />
    </div>
  );
};

export default SignDetection;
