'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349030319339"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 1000,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
      }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.502L4 29l7.748-1.812A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.174-1.453l-.36-.22-4.6 1.077 1.1-4.474-.237-.373A9.944 9.944 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.5 5c-.28 0-.735.105-1.12.525C10.995 11 10 12.005 10 13.5c0 1.497 1.121 2.944 1.275 3.15.155.205 2.177 3.472 5.363 4.726.748.298 1.333.476 1.788.608.75.22 1.434.189 1.974.115.602-.083 1.854-.757 2.116-1.489.261-.731.261-1.358.183-1.489-.079-.13-.284-.208-.595-.364-.311-.156-1.854-.916-2.14-1.02-.285-.105-.493-.157-.7.157-.208.313-.805.916-.986 1.104-.182.187-.363.21-.674.053-.311-.157-1.313-.484-2.502-1.545-.924-.825-1.549-1.843-1.73-2.156-.182-.313-.02-.482.136-.638.141-.14.311-.364.467-.546.156-.182.208-.313.311-.522.104-.208.052-.39-.026-.546-.078-.156-.7-1.686-.958-2.308-.252-.607-.508-.524-.7-.534L12.5 8z"/>
      </svg>
    </a>
  );
}

