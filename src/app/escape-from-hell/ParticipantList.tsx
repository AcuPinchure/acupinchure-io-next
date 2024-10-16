"use client";

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { Participant } from "./ParticipantListItem";
import ParticipantListItem from "./ParticipantListItem";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

interface EscapeData {
  title: string;
  description: string;
  link: string;
  avaliableDates: string[];
  price: string;
  isFailed: boolean;
  failedReason: string;
  participants: Participant[];
}

const ParticipantList: React.FC = () => {
  const [data, setData] = useState<EscapeData>({
    title: "",
    description: "",
    link: "",
    avaliableDates: [],
    price: "",
    isFailed: false,
    failedReason: "",
    participants: [],
  });
  const [loading, setLoading] = useState(true);

  const participantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.acupinchure.com/simple-data/escape-data.json", {
      mode: "cors",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        const escapeData = data as EscapeData;
        const colorSet = [
          "#7215de",
          "#2923db",
          "#6df609",
          "#d3dd8a",
          "#6faa56",
          "#acd8c0",
          "#6e7452",
          "#246415",
          "#924cb9",
          "#713831",
          "#c0ebee",
          "#f0f0f0",
        ];
        escapeData.participants.forEach((participant, index) => {
          participant.color = colorSet[index % colorSet.length];
        });
        setData(escapeData);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={2} position={"relative"}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"100vh"}
        id={"description"}
        spacing={2}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant={"h3"}>{data.title}</Typography>
            <Typography variant={"body1"}>費用: {data.price}</Typography>
            <Typography variant={"body1"}>{data.description}</Typography>
            {data.link && (
              <Button
                variant="outlined"
                color="info"
                endIcon={<ArrowSquareOut />}
                href={data.link}
                target="_blank"
              >
                介紹網頁
              </Button>
            )}
          </>
        )}
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"stretch"}
        minHeight={"100vh"}
        id={"participants"}
        p={2}
        boxSizing={"border-box"}
        spacing={2}
        ref={participantRef}
      >
        <Typography variant={"h4"}>主揪可以的時間 & 大家可以的時間</Typography>
        {loading ? (
          <Box textAlign={"center"}>
            <CircularProgress />
          </Box>
        ) : (
          data.avaliableDates.map((date, index) => (
            <ParticipantListItem
              key={index}
              title={date}
              participants={data.participants.filter((p) =>
                p.avaliableDates.includes(index)
              )}
            />
          ))
        )}
      </Stack>
      {data.isFailed && (
        <Stack
          position={"absolute"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          bgcolor={"rgba(0, 0, 0, 0.5)"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          p={4}
          spacing={2}
          sx={{
            backdropFilter: "blur(5px)",
          }}
        >
          <Box position={"sticky"} top={"10vh"} left={0}>
            <Typography
              variant={"h4"}
              color="staticColor.whiteText"
              textAlign={"center"}
            >
              本次逃脫流團
            </Typography>
            <Typography
              variant={"h6"}
              color="staticColor.whiteText"
              textAlign={"center"}
            >
              流團原因：{data.failedReason}
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default ParticipantList;
