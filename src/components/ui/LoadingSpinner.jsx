import "./LoadingSpinner.css";

const LoadingSpinner = ({ size, stroke, color, bgColor }) => {
  const customeStyle = {};

  if (size) {
    customeStyle.height = size;
    customeStyle.width = size;
  }

  if (stroke) {
    customeStyle.borderWidth = stroke;
  }

  if (color) {
    customeStyle.borderTopColor = color;
  }

  if (bgColor) {
    customeStyle.borderBottomColor = bgColor;
    customeStyle.borderLeftColor = bgColor;
    customeStyle.borderRightColor = bgColor;
  }

  return <div style={customeStyle} className="loading-spinner"></div>;
};

export default LoadingSpinner;
