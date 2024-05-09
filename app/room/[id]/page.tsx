"use client";
import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { randomID } from "@/utils/helpers";

interface Props {
  params: {
    id: string;
  };
}

const page = ({ params }: Props) => {
  const roomID = params.id;

  const myMeeting = (element: HTMLDivElement) => {
    const appID = process.env.NEXT_PUBLIC_ZEGO_APP_ID;
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET || "";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      Number(appID),
      serverSecret,
      roomID,
      randomID(5), // user ID
      randomID(5) // username
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: window.location.href,
          // url:
          //   window.location.protocol +
          //   "//" +
          //   window.location.host +
          //   window.location.pathname +
          //   "?roomID=" +
          //   roomID,
        },
        {
          name: "Meeting ID",
          url: roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return <div className="w-full h-[92vh]" ref={myMeeting}></div>;
};

export default page;
