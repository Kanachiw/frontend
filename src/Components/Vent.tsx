import React from 'react';

type VentProps = {
    leftOnePercent: number
    leftTwoPercent: number;
    rightOnePercent: number
    rightTwoPercent: number;
};

const Vents: React.FC<VentProps> = ({ leftOnePercent, 
    leftTwoPercent, rightOnePercent, rightTwoPercent }) => {
    return (
        <div>
            
            <GroupedShapes/>
        </div>
    );
};

const GroupedShapes = () => {
    return (
      <svg  >
        
        <g>
          <rect  rx="10" ry="10" width="325" height="178" fill="#315B0F"  />
        </g>
        
      </svg>
    );
  };
  
export default Vents