"use client";
import Link from "next/link";
import React from "react";

const JoinMeeting = () => {
  const [roomId, setRoomId] = React.useState<string>("");

  return (
    <div className="flex gap-2 items-center mt-4 w-full">
      <input
        type="text"
        placeholder="Enter meeting code"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <Link href={`/room/${roomId}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Join
        </button>
      </Link>
    </div>
  );
};

export default JoinMeeting;
