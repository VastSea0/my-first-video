import React from 'react';
import {Gifplayer }from 'react-gif-player';
import { 
  interpolate, 
  useCurrentFrame, 
  useVideoConfig,
  Sequence,
  AbsoluteFill,
  spring,
  Img
} from 'remotion';
import Penguen from '../public/penguen.png';
// Gelişmiş başlık komponenti
const Title = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 25], [0, 1]);
  const scale = spring({
    frame,
    fps: 30,
    config: {
      damping: 15,
    }
  });
  
  return (
    <div 
      className="font-sans text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      style={{
        opacity,
        transform: `scale(${scale})`,
        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      {children}
    </div>
  );
};

// Gelişmiş kod bloğu komponenti
const CodeBlock = ({ code, frameOne, frameTwo }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const translateY = interpolate(frame, frameOne, frameTwo);
  
  const scale = spring({
    frame,
    fps: 30,
    config: {
      damping: 15,
    }
  });

  
  return (
    <div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl font-mono text-lg text-white my-5 shadow-2xl border border-gray-700"
      style={{
        opacity,
        //transform: `translateX(${translateY}px)`,
        transform: `scale(${scale})`,
        transition: 'transform 0.3s',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"/>
        <div className="w-3 h-3 rounded-full bg-yellow-500"/>
        <div className="w-3 h-3 rounded-full bg-green-500"/>
      </div>
      <pre>
        <code className="text-purple-300">{code}</code>
      </pre>
    </div>
  );
};

// Gelişmiş vurgulama efekti
const Highlight = ({ children }) => {
  const frame = useCurrentFrame();
  const scale = spring({
    frame: frame % 60,
    fps: 30,
    config: {
      damping: 10,
      mass: 0.5,
    }
  });
  
  return (
    <span 
      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block font-bold"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </span>
  );
};

// Gelişmiş bilgi kartı
const InfoCard = ({ title, description, icon }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = spring({
    frame,
    fps: 30,
    config: {
      damping: 15,
    }
  });

  return (
    <div 
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-700"
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

// Gelişmiş etiket
const Tag = ({ children }) => {
  const frame = useCurrentFrame();
  const scale = spring({
    frame,
    fps: 30,
    config: {
      damping: 12,
    }
  });
  
  return (
    <span 
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </span>
  );
};

const CardView = ({ children, className }) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 60], [0, 1]);
    const scale = spring({
      frame,
      fps: 30,
      config: {
        damping: 15,
      }
    });

    return (
      <div 
        className={className}
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    );
};

const Card3D = ({ children }) => {
    const frame = useCurrentFrame();
    
    const rotateY = interpolate(
      frame % 200,
      [0, 100, 200],
      [0, 180, 360]
    );
    
    return (
      <div 
        className="perspective-1000"
        style={{
          
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    );
  };

// Ana video komponenti
export const FireshipStyle = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-10 flex-1 justify-center items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"/>
      
    <Sequence from={0} durationInFrames={90} className='justify-center items-center flex'>
      <div className="space-y-6 flex flex-col items-center justify-center h-full">
        <Title>Marsstaki Uzayliyim</Title>
          <Card3D>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 shadow-2xl">
              <div className="font-bold text-white flex flex-col items-center">
                <Img src={Penguen} className="w-[150px] h-[150px] animate-bounce" alt="penguen" />
                <p className="font-bold text-center text-2xl mt-4">Zirlayan Penguen</p>
              </div>
            </div>
          </Card3D>
      </div>
      <Sequence from={30} durationInFrames={60} className='solid m-50 p-50 justify-center items-center flex'>
      <div className=" flex flex-col items-center justify-center h-full">
          <Title >
            <p style={{
                display: 'flex',
                top: '250px',
                left: '-350px',
                position: 'absolute',
                textAlign: 'center',
                width: '800px',
                color: 'white',
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>
                Kanala Hoş geldiniz
            </p>
            </Title>
      </div>
    </Sequence>
    </Sequence>



      <Sequence from={90} durationInFrames={60} className='justify-center items-center flex'>
        <div className="space-y-6 flex flex-col items-center justify-center h-full">
         
          <Card3D>
          <iframe src="https://giphy.com/embed/ZiPcuOQn9WizpLZ9Fg" width="240" height="240" style={{}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

          </Card3D>
          <div className="flex space-x-3">
            <Tag>⚛️ React</Tag>
            <Tag>🎥 Remotion</Tag>
            <Tag>🎨 Tailwind</Tag>
          </div>
        </div>
      </Sequence>

      <Sequence from={150} durationInFrames={60} className='justify-center items-center flex'>
        <div className='space-y-6 flex flex-col items-center justify-center h-full'>
        <Title>
              Bu video Remotion ile oluşturuldu ve ben kodladım :)
            </Title>
          <Card3D>
           
            <iframe src='https://giphy.com/embed/ZVik7pBtu9dNS' width="760" height="760" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

          </Card3D>
      </div>
      </Sequence>

      <Sequence from={210} durationInFrames={120} className='justify-center items-center flex'>
        <div className="space-y-8 flex flex-col items-center justify-center h-full">
          <p className="text-3xl text-white font-light text-center leading-relaxed">
            İşte az önceki sahnenin kodları: <Highlight>React</Highlight> ve <Highlight>Tailwind CSS</Highlight> ile kolayca oluşturabiliyoruz
          </p>
          
          <CodeBlock code={`
   <Sequence from={150} durationInFrames={60} className='justify-center items-center flex'>
        <div className='space-y-6 flex flex-col items-center justify-center h-full'>
        <Title>
              Bu video Remotion ile oluşturuldu ve ben kodladım :)
            </Title>
          <Card3D>
           
            <iframe src='https://giphy.com/embed/ZVik7pBtu9dNS' width="760" height="760" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

          </Card3D>
      </div>
      </Sequence>`} 
frameOne={[0, 15]} frameTwo={[0,150]} />
          
            <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            <InfoCard 
              icon="⚡"
              title="Yıldırım Hızında Kurulum" 
              description="Akışkan iş akışı sayesinde video projenizi dakikalar içinde çalıştırın"
            />
            <InfoCard 
              icon="🎨"
              title="Güzel Stil" 
              description="Çarpıcı tasarımlar için Tailwind CSS'in gücünden yararlanın"
            />
            </div>
        </div>
      </Sequence>

      <Sequence from={330} durationInFrames={90} className='justify-center items-center flex'>
     
        
       
        <div className=" flex flex-col items-center justify-center h-full">

            <Card3D className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 shadow-2xl">
              <iframe src="https://giphy.com/embed/jTmRHqDfckuNT5hVEu" width="720" height="440" style={{}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </Card3D>
            <Title >
              <p style={{
                  display: 'flex',
                  top: '50px',
                  left: '-350px',
                  position: 'absolute',
                  textAlign: 'center',
                  width: '800px',
                  color: 'white',
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}>
                  Başka videoda görüşmek üzere!
              </p>
              </Title>
        </div>
    
    </Sequence>
    </div>
  );
};

export default FireshipStyle;