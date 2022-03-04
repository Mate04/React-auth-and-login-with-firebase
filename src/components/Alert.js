export function Alert({ message }) {
  return (
    <div className="bg-red-100 border border-red-700 text-red-500 px-4 py-3 rounded mb-2 text-center">
      <span>{message}</span>
    </div>
  );
}
