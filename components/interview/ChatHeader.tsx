import Timer from "./Timer";

type Props = {
  role: string;
};

export default function ChatHeader({ role }: Props) {
  return (
    <div className="border-b border-gray-800 p-4 flex justify-between">

      <div>
        <h1 className="text-xl font-bold">
          InterviewX AI
        </h1>

        <p className="text-sm text-gray-400">
          {role}
        </p>
      </div>

      <Timer />
    </div>
  );
}