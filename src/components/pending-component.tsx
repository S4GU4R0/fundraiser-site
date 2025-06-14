import React from "react";

export function PendingComponent() {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowVideo((v) => !v)}>
        Toggle ASCII Video
      </button>
      {showVideo ? (
        <AsciiVideoPlayer />
      ) : (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
          <div className="rounded-lg bg-gray-800 p-8">
            <div className="flex flex-col items-center">
              {/* ASCII Loader (simple bouncing dots) */}
              <pre className="mb-4 select-none font-mono text-xl leading-none text-green-400">
                [ . . . ]
              </pre>
              <h2 className="mb-4 animate-pulse font-mono text-2xl font-bold text-green-300">
                Loading...
              </h2>
              <p className="mb-6 text-center font-mono text-green-200">
                Please wait while we fetch your data.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AsciiVideoPlayer() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <video
        src="/dogs_playing.webm"
        autoPlay
        loop
        muted
        controls
        className="w-full max-w-2xl bg-black"
        style={{ fontFamily: "monospace" }}
      />
    </div>
  );
}
