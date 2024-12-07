import YouTube from "react-youtube/dist/YouTube";

const myOpts = {
  height: "100%",
  width: "100%",
  playerVars: {
    mute: 1,
    rel: 0,
    controls: 0,
    showInfo: 0,
    disablekb: 1,
  },
};

// Main Component
const YoutubeCard = ({ id }) => {
  return (
    <YouTube
      videoId={id}
      opts={myOpts}
      className="rounded-md overflow-hidden w-full h-52"
    />
  );
};

export default YoutubeCard;
