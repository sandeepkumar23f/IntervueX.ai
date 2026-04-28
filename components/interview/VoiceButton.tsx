"use client";

export default function VoiceButton({ setInput }: any) {
  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
    };
  };

  return (
    <button
      onClick={startListening}
      className="bg-purple-600 px-4 rounded-md hover:bg-purple-700"
    >
      🎤
    </button>
  );
}