import React from 'react';
import { IAuthor } from '../../shared/interfaces';
import { combineClasses } from '../../utils/utils';

const NewAvatar = ({ author, className }: { author: string; className?: string }) => {
  return (
    <div
      className={combineClasses(
        `flex items-center justify-center rounded-full overflow-hidden bg-white shrink-0`,
        className
      )}
      style={{
        boxShadow: '0 4px 8px rgba(120, 144, 156, 0.2)', // Soft blue-gray shadow
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src={author} alt={author} width="100%" />
    </div>
  );
};

export default NewAvatar;
