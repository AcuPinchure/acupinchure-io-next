"use client";

import { Avatar, Box, Paper, Tooltip, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import ParticipantAvatar from "./ParticipantAvatar";

export interface Participant {
  name: string;
  short: string;
  avaliableDates: number[];
  color?: string;
}

interface ParticipantListItemProps {
  title: string;
  participants: Participant[];
}

const ParticipantListItem: React.FC<ParticipantListItemProps> = ({
  title,
  participants,
}) => {
  const paperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!paperRef.current) return;
    // add intersection observer to paper to trigger animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateParticipants();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(paperRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  function animateParticipants() {
    if (!paperRef.current) return;
    const { x: initX, y: initY } = paperRef.current.getBoundingClientRect();

    const participantAvatars =
      paperRef.current.querySelectorAll(".participant");

    participantAvatars.forEach((e) => {
      const element = e as HTMLElement;
      const { x, y } = element.getBoundingClientRect();
      element.style.top = `${initY - y + 400}px`;
      element.style.left = `${-x}px`;
    });

    setTimeout(() => {
      participantAvatars.forEach((e, index) => {
        const element = e as HTMLElement;
        element.style.transition = `all 0.5s ${index * 0.05}s`;
        element.style.top = `0px`;
        element.style.left = `0px`;
        element.style.opacity = "1";
      });
    }, 100);
  }

  return (
    <Paper sx={{ minHeight: "9rem", padding: "1rem" }} ref={paperRef}>
      <Typography variant="h6">
        {title} ({participants.length}人)
      </Typography>
      {participants.map((p, avatarIndex) => (
        <Box
          key={p.name}
          position={"relative"}
          m={1}
          display={"inline-block"}
          className={"participant"}
          sx={{
            opacity: 0,
          }}
        >
          <ParticipantAvatar
            name={p.name}
            short={p.short}
            color={p.color || ""}
          />
        </Box>
      ))}
    </Paper>
  );
};

export default ParticipantListItem;
