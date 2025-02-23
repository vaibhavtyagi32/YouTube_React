/* eslint-disable react/prop-types */
const VideoCard = ({ data }) => {
  if (!data || !data.snippet || !data.statistics) return null; // Prevents errors

  const { snippet, statistics } = data;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-[280px] mt-5 shadow-lg p-3 rounded-lg bg-white">
      <img
        src={thumbnails?.high?.url}
        alt="video thumbnail"
        className="rounded-lg w-full h-40 object-cover"
      />
      <ul className="mt-2">
        <li className="font-bold truncate">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-500">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
