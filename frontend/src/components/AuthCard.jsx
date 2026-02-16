// src/components/AuthCard.jsx
export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-200/70 overflow-hidden">
      <div className="px-8 pt-8 pb-8">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1.5 text-sm text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
    </div>
  );
}