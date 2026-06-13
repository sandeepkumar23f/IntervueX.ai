type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="h-2 bg-gray-800 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-2">
        Question {current} of {total}
      </p>
    </div>
  );
}