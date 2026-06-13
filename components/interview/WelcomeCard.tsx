type Props = {
  role: string;
};

export default function WelcomeCard({ role }: Props) {
  return (
    <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-xl p-5">

      <h2 className="font-bold text-xl">
        {role} Interview
      </h2>

      <p className="text-gray-400 mt-2">
        Answer confidently and clearly.
      </p>

    </div>
  );
}