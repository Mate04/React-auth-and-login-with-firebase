import { useAuth } from "../context/authContext";
export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <h1>Loading</h1>;
  return (
    <div className="w-full max-w-xs m-auto">
      <div className="w-full max-w-xs m-auto">
        <p className="mb-4 text-orange-600 text-7xl">Welcome <span className="font-bold">{user.displayName || user.email}</span></p>

        <button onClick={handleLogOut} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black">logout</button>
      </div>
    </div>
  );
}
