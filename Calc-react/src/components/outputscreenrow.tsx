import React from 'react';

interface OutputScreenRowProps {
  value: string | readonly string[] ;
}

const OutputScreenRow: React.FC<OutputScreenRowProps> = ({ value }) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={value} />
    </div>
  );
};

export default OutputScreenRow;
