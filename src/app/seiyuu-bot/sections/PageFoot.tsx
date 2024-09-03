"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2 as Grid,
  useTheme,
} from "@mui/material";
import ModalTrigger from "@/components/bot/ModalTrigger";
import { useState } from "react";
import { Info } from "@phosphor-icons/react/dist/ssr";

const PageFoot: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const theme = useTheme();

  const avatars = [
    {
      label: "前田佳織里",
      src: "/images/bot/Kaorin_Link.jpg",
      href: "https://twitter.com/kaorin__bot",
    },
    {
      label: "鬼頭明里",
      src: "/images/bot/Akarin_Link.jpg",
      href: "https://twitter.com/akarin__bot",
    },
    {
      label: "田中ちえ美",
      src: "/images/bot/Chemi_Link.jpg",
      href: "https://twitter.com/chiemi__bot",
    },
  ];

  const accountList = [
    {
      name: "岬なこ 画像bot",
      screenName: "misaki_nako_bot",
    },
    {
      name: "小泉萌香bot",
      screenName: "moekapic_bot",
    },
    {
      name: "大西亜玖璃さん画像bot",
      screenName: "aguri_onishibot",
    },
    {
      name: "久保田未夢ちゃん画像bot",
      screenName: "kubotamiyu_bot",
    },
    {
      name: "青山なぎさ（なぎちゃん）画像bot",
      screenName: "AoyamaNagisabot",
    },
  ];

  return (
    <Box
      component={"section"}
      px={4}
      py={12}
      minHeight={"100vh"}
      id="page-foot"
      color={"text.primary"}
      sx={{
        backgroundColor: "#1b0938",
        ...theme.applyStyles("light", {
          backgroundColor: "#bc97e5",
        }),
      }}
    >
      <Grid container spacing={0} rowSpacing={6}>
        <Grid
          size={{
            sm: 12,
          }}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack direction={"column"} spacing={2}>
            <Typography variant="h3" textAlign={"center"}>
              Stay Tuned
            </Typography>
            <Typography variant="body1" textAlign={"center"} color={"inherit"}>
              Lovelive Seiyuu Bot currently has 3 accounts, click the avatar to
              view them on Twitter.
            </Typography>
          </Stack>
        </Grid>
        {avatars.map((avatar) => (
          <Grid
            size={{
              sm: 12,
              md: 4,
            }}
            display={"flex"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            key={avatar.label}
          >
            <Stack
              component={"a"}
              href={avatar.href}
              direction={"column"}
              width={150}
              alignItems={"center"}
              color={"inherit"}
              sx={{
                textDecoration: "none",
                "&:hover": { transform: "scale(1.1)" },
                transition: "transform 0.2s ease",
                cursor: "pointer",
              }}
              spacing={2}
            >
              <Avatar
                src={avatar.src}
                alt={avatar.label}
                sx={{
                  width: 150,
                  height: 150,
                }}
              />
              <Typography variant="h5" textAlign={"center"} color={"inherit"}>
                {avatar.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
        <Grid
          size={{
            sm: 12,
          }}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack direction={"column"} spacing={2} alignItems={"center"} mt={12}>
            <Typography variant="h4" textAlign={"center"} color={"inherit"}>
              {"Didn't find your favorite seiyuu on the list?"}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                variant="body1"
                textAlign={"center"}
                color={"inherit"}
              >
                See
              </Typography>
              <Button
                endIcon={<Info />}
                sx={{ color: "text.primary", textDecoration: "underline" }}
                onClick={() => setOpenDialog(true)}
              >
                the list of all Lovelive Seiyuu Bot accounts by other users
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">
          List of found Lovelive Seiyuu Bots by other users
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="text.primary">
            <ul>
              {accountList.map((account) => (
                <li key={account.screenName}>
                  <a
                    href={`https://twitter.com/${account.screenName}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {account.name}
                  </a>
                </li>
              ))}
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenDialog(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PageFoot;
