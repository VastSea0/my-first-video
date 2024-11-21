import './tailwind.css';
import { Composition } from "remotion";
import { FireshipStyle } from './FireshipStyle';

export const RemotionRoot: React.FC = () => {
  return (
    <>
    <Composition
      id="FireshipStyle"
      component={FireshipStyle}
      durationInFrames={418}
      fps={30}
      width={1920}
      height={1080}
    />
    </>
  );
};
