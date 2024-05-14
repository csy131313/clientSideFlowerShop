
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { getProductById } from "./productApi";

// const ProductDetails = () => {
//     const [product, setProduct] = useState({});
//     let { id } = useParams();
//     let navigate = useNavigate();

//     useEffect(() => {
//         getProductById(id).then(res => {
//             alert("Succeeded in fetching the data");
//             setProduct(res.data);
//         }).catch(err => {
//             console.log(err);
//             alert("Failed to fetch data");
//         });
//     }, []);

//     return (
//         <div
//             style={{
//                 // marginTop: "32vh",
//                 position: "fixed",
//                 top: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 backgroundColor: "olive",
//                 zIndex: 2000
//             }}
//         >


//             <h1>פרטים</h1>
//             <input type="button" value="Back" onClick={() => navigate(-1)} />
//             <h3>Details {id}</h3>
//             <h3>{product.name}</h3>
//             <h3>{product.price}</h3>
//             {/* <h2>{product.imgUrl}</h2> */}
//             <img src={product.RoutingToImage} style={{ height: "80vh" }}></img>
//         </div>
//     );
// };

// export default ProductDetails;




// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getProductById } from "./productApi";

// const ProductDetails = () => {
//     const [product, setProduct] = useState({});
//     const [zoomLevel, setZoomLevel] = useState(1);
//     let { id } = useParams();
//     let navigate = useNavigate();

//     useEffect(() => {
//         getProductById(id).then(res => {
//             alert("Succeeded in fetching the data");
//             setProduct(res.data);
//         }).catch(err => {
//             console.log(err);
//             alert("Failed to fetch data");
//         });
//     }, [id]);

//     const handleZoomIn = () => {
//         setZoomLevel(prevZoomLevel => prevZoomLevel + 0.1);
//     };

//     const handleZoomOut = () => {
//         if (zoomLevel > 1) {
//             setZoomLevel(prevZoomLevel => prevZoomLevel - 0.1);
//         }
//     };

//     return (
//         <div   style={{
//                             // marginTop: "32vh",
//                             position: "fixed",
//                             top: 0,
//                             width: "100vw",
//                             height: "100vh",
//                             backgroundColor: "olive",
//                             zIndex: 2000
//                         }}>
//             <h1>פרטים</h1>
//             <input type="button" value="Back" onClick={() => navigate(-1)} />
//             <h3>Details {id}</h3>
//             <div>
//                 <button onClick={handleZoomIn}>Zoom In</button>
//                 <button onClick={handleZoomOut}>Zoom Out</button>
//             </div>
//             <h3>{product.name}</h3>
//             <h3>{product.price}</h3>
//             <div style={{ width: "500px", height: "500px", overflow: "hidden" }}>
//                 <div style={{ position: "relative", width: "100%", height: "100%" }}>
//                     <img
//                         src={product.RoutingToImage}
//                         alt="Product Image"
//                         style={{ position: "absolute", top: "50%", left: "50%", transform: `translate(-50%, -50%) scale(${zoomLevel})`, maxWidth: "100%", maxHeight: "100%", transition: "transform 0.2s" }}
//                     />
//                 </div>
//             </div>
          
        
           
//         </div>
//     );
// };

// export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getProductById } from "./productApi";

// const ProductDetails = () => {
//     const [product, setProduct] = useState({});
//     const [zoomLevel, setZoomLevel] = useState(1);
//     const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
//     const [isDragging, setIsDragging] = useState(false);
//     let { id } = useParams();
//     let navigate = useNavigate();

//     useEffect(() => {
//         getProductById(id).then(res => {
//             alert("Succeeded in fetching the data");
//             setProduct(res.data);
//         }).catch(err => {
//             console.log(err);
//             alert("Failed to fetch data");
//         });
//     }, [id]);

//     const handleZoomIn = () => {
//         setZoomLevel(prevZoomLevel => prevZoomLevel + 0.1);
//     };

//     const handleZoomOut = () => {
//         if (zoomLevel > 1) {
//             setZoomLevel(prevZoomLevel => prevZoomLevel - 0.1);
//         }
//     };

//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//     };

//     const handleMouseMove = (e) => {
//         if (isDragging) {
//             setPanPosition({ x: e.movementX, y: e.movementY });
//         }
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     return (
//         <div>
//             <h1>פרטים</h1>
//             <input type="button" value="Back" onClick={() => navigate(-1)} />
//             <h3>Details {id}</h3>
//             <h3>{product.name}</h3>
//             <h3>{product.price}</h3>
//             <div
//                 style={{
//                     width: "500px",
//                     height: "500px",
//                     border: "1px solid black",
//                     position: "relative",
//                 }}
//             >
//                 <div
//                     style={{
//                         width: "100%",
//                         height: "100%",
//                         position: "relative",
//                                                cursor: isDragging ? "grabbing" : "grab",
//                     }}
//                     onMouseDown={handleMouseDown}
//                     onMouseMove={handleMouseMove}
//                     onMouseUp={handleMouseUp}
//                     onMouseLeave={handleMouseUp}
//                 >
//                     <img
//                         src={product.image}
//                         alt="Product Image"
//                         style={{
//                             position: "absolute",
//                             top: `calc(50% + ${panPosition.y}px)`,
//                             left: `calc(50% + ${panPosition.x}px)`,
//                             transform: `translate(-50%, -50%) scale(${zoomLevel})`,
//                             maxWidth: "100%",
//                             maxHeight: "100%",
//                             transition: "transform 0.2s",
//                         }}
//                     />
//                 </div>

//                 <div>
//                     <button onClick={handleZoomIn}>Zoom In</button>
//                     <button onClick={handleZoomOut}>Zoom Out</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "./productApi";
// import { useNavigate } from "react-router-dom";


// const ProductDetails = () => {
//     const [zoomLevel, setZoomLevel] = useState(1);
//     const [product, setProduct] = useState({});
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     let { id } = useParams();
//     let navigate = useNavigate();
 
//         useEffect(() => {
//         getProductById(id).then(res => {
//             alert("Succeeded in fetching the data");
//             setProduct(res.data);
//         }).catch(err => {
//             console.log(err);
//             alert("Failed to fetch data");
//         });
//     }, [id]);

//     const handleZoomIn = () => {
//         setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
//     };

//     const handleZoomOut = () => {
//         if (zoomLevel > 1) {
//             setZoomLevel((prevZoomLevel) => prevZoomLevel - 0.1);
//         }
//     };

//     const handleMouseMove = (e) => {
//         setPosition({
//             x: e.nativeEvent.offsetX,
//             y: e.nativeEvent.offsetY
//         });
//     };

//     return (
//         <div  style={{
//                                         // marginTop: "32vh",
//                                         position: "fixed",
//                                         top: 0,
//                                         width: "100vw",
//                                         height: "100vh",
//                                         backgroundColor: "olive",
//                                         zIndex: 2000
//                                     }}>
//             <div>
//                 <button onClick={handleZoomIn}>Zoom In</button>
//                 <button onClick={handleZoomOut}>Zoom Out</button>
//             </div>
//             <h1>פרטים</h1>
//              <input type="button" value="Back" onClick={() => navigate(-1)} />
//             <h3>Details {id}</h3>
//              <h3>{product.name}</h3>
//                           <h3>{product.price}</h3>
//             <div
//                 style={{
//                     position: "relative",
//                     width: "400px",
//                     height: "400px",
//                     border: "1px solid black",
//                     overflow: "hidden",
//                 }}
//                 onMouseMove={handleMouseMove}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: `${position.y}px`,
//                         left: `${position.x}px`,
//                         transform: `scale(${zoomLevel})`,
//                     }}
//                 >
//                     <img
//                         src={product.RoutingToImage}
//                         alt={product.name}
//                         style={{ width: "100%", height: "auto" }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./productApi";
import { useNavigate } from "react-router-dom";


// //עובדים רק הכיוונים
// const ProductDetails = () => {
//     const [zoomLevel, setZoomLevel] = useState(1);
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [product, setProduct] = useState({});
    
//     let { id } = useParams();
//     let navigate = useNavigate();
    
//     useEffect(() => {
//       getProductById(id)
//         .then(res => {
//           alert("Succeeded in fetching the data");
//           setProduct(res.data);
//         })
//         .catch(err => {
//           console.log(err);
//           alert("Failed to fetch data");
//         });
//     }, [id]);
    
//     const handleZoomIn = () => {
//       setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
//     };
    
//     const handleZoomOut = () => {
//       if (zoomLevel > 1) {
//         setZoomLevel((prevZoomLevel) => prevZoomLevel - 0.1);
//       }
//     };
    
//     const handleMove = (direction) => {
//         setPosition((prevPosition) => {
//           switch (direction) {
//             case "up":
//               return { x: prevPosition.x, y: prevPosition.y - 10 };
//             case "down":
//               return { x: prevPosition.x, y: prevPosition.y + 10 };
//             case "left":
//               return { x: prevPosition.x - 10, y: prevPosition.y };
//             case "right":
//               return { x: prevPosition.x + 10, y: prevPosition.y };
//             default:
//               return prevPosition;
//           }
//         });
//       };
      
  
//     return (
//       <div style={{
//         position: "fixed",
//         top: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "olive",
//         zIndex: 2000,
//         textAlign:"center"
//       }}>
//         <div>
//           <button onClick={handleZoomIn}>Zoom In</button>
//           <button onClick={handleZoomOut}>Zoom Out</button>
//           <button onClick={() => handleMove("up")}>Move Up</button>
         
//           <button onClick={() => handleMove("down")}>Move Down</button>
//           <button onClick={() => handleMove("left")}>Move Left</button>
//           <button onClick={() => handleMove("right")}>Move Right</button>
//         </div>
//         <div style={{
//           position: "relative",
//           width: "400px",
//           height: "400px",
//           border: "1px solid black",
//           overflow: "hidden"
//         }}>
//          <div style={{
//   position: "absolute",
//   top: `${position.y}px`,
//   left: `${position.x}px`,
//   width: "100%",
//   height: "auto",
// }}>
//   <img src={product.RoutingToImage} alt={product.name} style={{ width: "100%", height: "auto" }} />
// </div>

//         </div>
//       </div>
//     );
//   };
  
//   export default ProductDetails;
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductDetails = () => {
    const [zoomLevel, setZoomLevel] = useState(100);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [product, setProduct] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();
    
        useEffect(() => {
          getProductById(id)
            .then(res => {
              alert("Succeeded in fetching the data");
              setProduct(res.data);
            })
            .catch(err => {
              console.log(err);
              alert("Failed to fetch data");
            });
        }, [id]);
        const handleZoomIn = () => {
            setZoomLevel((prevZoomLevel) => {
                const newZoomLevel = prevZoomLevel + 10;
                return newZoomLevel;
            });
        };
        
        const handleZoomOut = () => {
            if (zoomLevel > 10) {
                setZoomLevel((prevZoomLevel) => {
                    const newZoomLevel = prevZoomLevel - 10;
                    return newZoomLevel;
                });
            }
        };
        

    const handleMove = (direction) => {
        setPosition((prevPosition) => {
            switch (direction) {
                case "up":
                    return { x: prevPosition.x, y: prevPosition.y - 10 };
                case "down":
                    return { x: prevPosition.x, y: prevPosition.y + 10 };
                case "left":
                    return { x: prevPosition.x - 10, y: prevPosition.y };
                case "right":
                    return { x: prevPosition.x + 10, y: prevPosition.y };
                default:
                    return prevPosition;
            }
        });
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "fixed", top: 0, width: "100vw", height: "100vh", backgroundColor: "#fffdd0", zIndex: 2000 }}>
<h2>פרטים</h2>
           
            <h4>{product.name} מק"ט</h4><h4> מחיר: {product.price} ש"ח </h4>
            <button onClick={() => navigate(-1)}>Back</button>
            <div style={{ height: "70%", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "0%", left: "50%", zIndex: 3000 }}>
                    <button onClick={() => handleMove("up")}><ArrowUpwardIcon /></button>
                </div>
                <div style={{ display: "flex", alignItems: "center" ,marginTop:"10%",marginBottom:"10%"}}>
                    <button onClick={() => handleMove("left")}><ArrowBackIcon /></button>
                    <div style={{ position: "relative", width: "300px", height: "300px", border: "1px solid black", overflow: "hidden"}}>
                        <img
                            src={product.RoutingToImage} alt={product.name}
                            style={{ width: `${zoomLevel}%`, position: "absolute", top: `${position.y}px`, left: `${position.x}px` }}
                        />
                    </div>
                    <button onClick={() => handleMove("right")}><ArrowForwardIcon /></button>
                </div>
                <div style={{ position: "absolute", bottom: "10%", left: "50%", zIndex: 3000 }}>
                    <button onClick={() => handleMove("down")}><ArrowDownwardIcon /></button>
                </div>
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <button onClick={handleZoomIn}>Zoom In</button>
                    <button onClick={handleZoomOut}>Zoom Out</button>
                </div>
            </div>
        </div>
    );
    
};

export default ProductDetails;

