export default function UserIdPage({ params }: { params: { id: string } }) {
  console.log(params);
  return <div className="text-red-500">SINGLE USER: {params.id}</div>;
}
