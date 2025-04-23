import React from 'react'

function Avatar({ src, size = "md", className = "" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden flex-shrink-0 ${className}`}>
      <img 
        src={src} 
        alt="User avatar" 
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default Avatar;
