
// import React, { useState, useEffect } from 'react';

// const ImageList = () => {
//   const itemData = [
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
    



//     // Add paths for the remaining images
//   ];

 

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const shuffledData = [...itemData].sort(() => Math.random() - 0.5);
//       setItemData(shuffledData);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [itemData]);

//   return (
//     <div>
//       <div style={{ width: 500, height: 450, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
//         {itemData.map((item, index) => (
//           <div key={index} style={{ filter: 'blur(3px)' }}>
//             <img
//               src={process.env.PUBLIC_URL + item.img}
//               alt={item.title}
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageList;









// import React, { useState, useEffect } from 'react';

// const ImageList = () => {
//   const [itemData, setItemData] = useState([
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     { img: '/kat/000/0.jpg', title: 'Image 0' },
//     { img: '/kat/000/1.jpg', title: 'Image 1' },
//     { img: '/kat/000/9.png', title: 'Image 9' },

//     { img: '/kat/000/2.jpg', title: 'Image 2' },
//     { img: '/kat/000/3.png', title: 'Image 3' },
//     { img: '/kat/000/4.jpg', title: 'Image 4' },
//     { img: '/kat/000/5.jpg', title: 'Image 5' },
    
//     { img: '/kat/000/10.png', title: 'Image 10' },
//     { img: '/kat/000/6.jpg', title: 'Image 6' },

//     { img: '/kat/000/7.jpg', title: 'Image 7' },

//     { img: '/kat/000/8.jpg', title: 'Image 8' },
//     // Add paths for the remaining images
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const shuffledData = [...itemData].sort(() => Math.random() - 0.5);
//       setItemData(shuffledData);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [itemData, setItemData]); // Added setItemData as a dependency

//   return (
//     <div>
//       <div style={{ width: 500, height: 450, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
//         {itemData.map((item, index) => (
//           <div key={index} style={{ filter: 'blur(3px)' }}>
//             <img
//               src={process.env.PUBLIC_URL + item.img}
//               alt={item.title}
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageList;





import { useTheme } from '@mui/material/styles';

import React, { useState, useEffect } from 'react';


const ImageList = () => {
  const theme = useTheme();
  const [itemData, setItemData] = useState([
    { img: '/kat/000/1.jpg', title: 'Image 1' },
    { img: '/kat/000/9.png', title: 'Image 9' },

    { img: '/kat/000/2.jpg', title: 'Image 2' },
    { img: '/kat/000/3.png', title: 'Image 3' },
    { img: '/kat/000/4.jpg', title: 'Image 4' },
    { img: '/kat/000/5.jpg', title: 'Image 5' },
    
    { img: '/kat/000/10.png', title: 'Image 10' },
    { img: '/kat/000/6.jpg', title: 'Image 6' },

    { img: '/kat/000/7.jpg', title: 'Image 7' },

    { img: '/kat/000/8.jpg', title: 'Image 8' },
    { img: '/kat/000/0.jpg', title: 'Image 0' },
    { img: '/kat/000/1.jpg', title: 'Image 1' },
    { img: '/kat/000/9.png', title: 'Image 9' },

    { img: '/kat/000/2.jpg', title: 'Image 2' },
    { img: '/kat/000/3.png', title: 'Image 3' },
    { img: '/kat/000/4.jpg', title: 'Image 4' },
    { img: '/kat/000/5.jpg', title: 'Image 5' },
    
    { img: '/kat/000/10.png', title: 'Image 10' },
    { img: '/kat/000/6.jpg', title: 'Image 6' },

    { img: '/kat/000/7.jpg', title: 'Image 7' },

    { img: '/kat/000/8.jpg', title: 'Image 8' },
    { img: '/kat/000/0.jpg', title: 'Image 0' },
    { img: '/kat/000/1.jpg', title: 'Image 1' },
    { img: '/kat/000/9.png', title: 'Image 9' },

    { img: '/kat/000/2.jpg', title: 'Image 2' },
    { img: '/kat/000/3.png', title: 'Image 3' },
    { img: '/kat/000/4.jpg', title: 'Image 4' },
    { img: '/kat/000/5.jpg', title: 'Image 5' },
    
    { img: '/kat/000/10.png', title: 'Image 10' },
    { img: '/kat/000/6.jpg', title: 'Image 6' },

    { img: '/kat/000/7.jpg', title: 'Image 7' },

    { img: '/kat/000/8.jpg', title: 'Image 8' },
    { img: '/kat/000/0.jpg', title: 'Image 0' },
    { img: '/kat/000/1.jpg', title: 'Image 1' },
    { img: '/kat/000/9.png', title: 'Image 9' },

    { img: '/kat/000/2.jpg', title: 'Image 2' },
    { img: '/kat/000/3.png', title: 'Image 3' },
    { img: '/kat/000/4.jpg', title: 'Image 4' },
    { img: '/kat/000/5.jpg', title: 'Image 5' },
    
    { img: '/kat/000/10.png', title: 'Image 10' },
    { img: '/kat/000/6.jpg', title: 'Image 6' },

    { img: '/kat/000/7.jpg', title: 'Image 7' },

    { img: '/kat/000/8.jpg', title: 'Image 8' },
    // Add paths for more images
  ]);
  const [currentImages, setCurrentImages] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  let numberOfImages=3;

  useEffect(() => {
    const interval = setInterval(() => {
      let newImages = [...itemData];

      // Shuffle the images randomly
      for (let i = newImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
      }

      setCurrentImages(newImages);
      setIsTransitioning(true);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Blur effect for 1.5 seconds

    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, [itemData]);

  // Inside the return statement of ImageList component
return (
    <div style={{ background: theme.palette.secondary.main ,display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100vw', overflowX: 'hidden' }}>
      {currentImages.map((item, index) => (
        <div key={index} style={{ width: `${100 / numberOfImages}%`, textAlign: 'center', filter: isTransitioning ? 'blur(3px)' : 'none' }}>
          <img
            src={process.env.PUBLIC_URL + item.img}
            alt={item.title}
            style={{ maxWidth: '100%', height: 'auto', transition: 'filter 0.5s' }}
          />
        </div>
      ))}
    </div>
  );
  
};

export default ImageList;









