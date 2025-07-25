export default function UserCard({ name, email }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}
