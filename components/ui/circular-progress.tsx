"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CircularProgressProps {
  /** The percentage value (0-100) */
  percentage: number;
  /** Size of the circular progress in pixels */
  size?: number;
  /** Stroke width of the progress ring */
  strokeWidth?: number;
  /** Whether the component is in a loading state */
  isLoading?: boolean;
  /** Custom className for the container */
  className?: string;
  /** Whether to show the % symbol */
  showPercentageSymbol?: boolean;
  /** Custom color for the progress stroke */
  color?: string;
}

/**
 * CircularProgress Component
 * 
 * A beautiful circular progress bar with GSAP animations.
 * Displays the percentage in the center of the circle.
 * 
 * Uses the CoreCV theme colors:
 * - Deep Slate Blue (#1E3A5F) for text
 * - Soft Teal (#4FA3A5) for the progress stroke
 * - Mist Gray (#D1D5DB) for the track
 */
export function CircularProgress({
  percentage,
  size = 140,
  strokeWidth = 10,
  isLoading = false,
  className = "",
  showPercentageSymbol = true,
  color,
}: CircularProgressProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // Animate the progress and percentage text on mount and when percentage changes
  useEffect(() => {
    if (!circleRef.current || !percentageRef.current || isLoading) return;

    const circle = circleRef.current;
    const percentageEl = percentageRef.current;

    // Calculate the stroke-dashoffset based on percentage
    const offset = circumference - (percentage / 100) * circumference;

    // Animate the circle stroke
    gsap.to(circle, {
      strokeDashoffset: offset,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate the percentage number counting up
    gsap.to(
      { value: parseFloat(percentageEl.textContent || "0") },
      {
        value: percentage,
        duration: 1.2,
        ease: "power3.out",
        onUpdate: function () {
          percentageEl.textContent = Math.round(this.targets()[0].value).toString();
        },
      }
    );
  }, [percentage, circumference, isLoading]);

  // Subtle pulse animation when loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isLoading) {
      gsap.to(container, {
        scale: 1.02,
        opacity: 0.7,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    } else {
      gsap.killTweensOf(container);
      gsap.to(container, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    return () => {
      gsap.killTweensOf(container);
    };
  }, [isLoading]);

  // Get progress color based on percentage for visual feedback
  const getProgressColor = () => {
    if (isLoading) return "#D1D5DB"; // Mist Gray when loading
    if (color) return color; // Use custom color if provided
    if (percentage >= 80) return "#4FA3A5"; // Soft Teal for excellent
    if (percentage >= 50) return "#60A5FA"; // Sky Blue accent for good
    if (percentage >= 30) return "#F59E0B"; // Amber for needs improvement
    return "#EF4444"; // Red for critical
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background track circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#D1D5DB"
          strokeWidth={strokeWidth}
          className="opacity-40"
        />
        
        {/* Progress circle */}
        <circle
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={getProgressColor()}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Start at 0% (fully hidden)
          className="transition-colors duration-500"
        />
      </svg>

      {/* Center content - Percentage text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-baseline">
          <span
            ref={percentageRef}
            className="text-2xl font-bold text-[#1E3A5F] font-nunito"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            {isLoading ? "--" : "0"}
          </span>
          {showPercentageSymbol && <span className="text-sm text-[#1E3A5F]/60 font-medium ml-0.5">%</span>}
        </div>
      </div>
    </div>
  );
}

export default CircularProgress;
