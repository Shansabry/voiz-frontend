import React from 'react';

export const Footer = () => {
  return (
    <div className="text-light text-center py-3" style={{ backgroundColor: 'black', color: 'white', height: '56px' }}>
      <h6>Copyright© {new Date().getFullYear()}. CX Marketplace</h6>
    </div>
  );
}