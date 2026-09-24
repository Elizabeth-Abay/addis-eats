
/**
 * FullPageSpinner: A React component that displays a rotating spinner
 * that fills the entire viewport, designed as a global loading state.
 */
export default function FullPageSpinner() {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    // Using a semi-transparent background derived from your cream color:
    // --bg-cream: #FAF7F2 (250, 247, 242)
    backgroundColor: 'rgba(250, 247, 242, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Ensures it's on top of everything, including sticky headers (z-index 1000+)
    zIndex: 9999, 
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    // A standard light border
    border: '6px solid #EFE8E1', // derived from your --border-light
    // The colorful arc is your primary maroon: --primary-maroon: #7A1C08
    borderTop: '6px solid #7A1C08', 
    animation: 'spin 1s linear infinite', // calls the keyframe animation
  };

  return (
    <div style={overlayStyle}>
      {/* 
        The actual spinner element.
        NOTE: The animation definition ('spin') must exist in your global CSS.
      */}
      <div style={spinnerStyle} className="page-spinner-element"></div>
    </div>
  );
}