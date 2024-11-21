
import {Img, useVideoConfig, useCurrentFrame, AbsoluteFill} from 'remotion';
import Penguen from '../public/penguen.png';


export const PenguenCard = () => {
  const {fps, durationInFrames, width, height} = useVideoConfig();

  const frame = useCurrentFrame();  
  const opacity = frame / durationInFrames;
    

  return (
          <AbsoluteFill style={{
            position: 'absolute',
            top: 250,
            left: 500,
            right: 0,
            bottom: 0,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: opacity,
            width: `150px`,
            height: `150px`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            transform: `rotate(${frame * 3}deg)`,
          }}>
          <div className="bg-rose-500 rounded-3xl m-5 p-5 justify-center items-center">
            <Img src={Penguen} className='w-[150px] h-[150px] ' alt="placeholder" />
            <div className="text-3xl font-bold text-white">Üzgün Penguen</div>
          </div>
      </AbsoluteFill>
      

  );
};
