import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg 
        width="120" 
        height="24" 
        viewBox="0 0 120 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
      >
        <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
        <path d="M26 7H24V17H26V7Z" />
        <path d="M30 7V17H40V15H32V13H38V11H32V9H40V7H30Z" />
        <path d="M46 15V7H44V17H54V15H46Z" />
        <path d="M55 12C55 14.76 57.24 17 60 17H64C66.76 17 69 14.76 69 12C69 9.24 66.76 7 64 7H60C57.24 7 55 9.24 55 12ZM60 9H64C65.66 9 67 10.34 67 12C67 13.66 65.66 15 64 15H60C58.34 15 57 13.66 57 12C57 10.34 58.34 9 60 9Z" />
        <path d="M76 9H80V17H82V9H86V7H76V9Z" />
        <path d="M95 7L90 17H92.34L93.16 15H98.84L99.66 17H102L97 7H95ZM94.16 13L96 8.28L97.84 13H94.16Z" />
        <path d="M108 13L104 7H102V17H104V11L108 17H110V7H108V13Z" />
      </svg>
    </div>
  );
};