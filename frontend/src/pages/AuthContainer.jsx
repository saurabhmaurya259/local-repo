import { useState } from 'react';
import UserLogin from './UserLogin';
import Register from './Register';

export default function AuthContainer() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
<div className="min-h-screen flex items-center justify-center px-4 py-6 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">      <div className="relative w-full max-w-md min-h-[580px] perspective-1000">
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-1200 ease-in-out transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4">
            <UserLogin onShowRegister={() => setIsFlipped(true)} />
          </div>

          <div className="absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center p-4">
            <Register onBackToLogin={() => setIsFlipped(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}