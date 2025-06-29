import React from 'react';
import Particles from './Particles';
const Background = () => {



     



    return (
        <div className='fixed top-0  -z-10 w-full min-h-screen bg-black' >
             <div style={{ width: '100%', height: '700px', position: 'relative' }}>
           <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
         </div>
            
            
          
         
            
        </div>
    );
};

export default Background;