import React, { useEffect, useState } from 'react';
import ReactCountUp from 'react-countup';

interface CountUpProps {
  className?: string;
  endValue: string | number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ 
  className = "", 
  endValue, 
  duration = 2, 
  prefix = "", 
  suffix = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate intersection observer behavior
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  // Convert string numbers with K to actual numbers
  const parseValue = (value: string | number): number => {
    if (typeof value === 'number') return value;
    
    if (typeof value === 'string') {
      // If the string ends with K, multiply by 1000
      if (value.endsWith('K')) {
        return parseFloat(value.replace('K', '')) * 1000;
      }
      // If the string ends with M, multiply by 1000000
      if (value.endsWith('M')) {
        return parseFloat(value.replace('M', '')) * 1000000;
      }
      return parseInt(value, 10);
    }
    
    return 0;
  };

  const numericValue = parseValue(endValue);

  return (
    <span className={className}>
      {prefix}
      {isVisible ? (
        <ReactCountUp
          end={numericValue}
          duration={duration}
          separator=","
          useEasing={true}
        />
      ) : (
        0
      )}
      {suffix}
    </span>
  );
};

export default CountUp; 