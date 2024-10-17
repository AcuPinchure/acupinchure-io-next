import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Container, Grid2 as Grid } from "@mui/material";
import ModalTrigger from "@/components/bot/ModalTrigger";
import theme from "@/theme";

const PageFoot: React.FC = () => {
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
    {
      name: "Liella GIF Bot",
      screenName: "Liella_GIF_Bot",
    },
  ];

  return (
    <Box
      component={"section"}
      py={12}
      minHeight={"100vh"}
      id="page-foot"
      color={"text.primary"}
      sx={{
        ".light &": {
          backgroundColor: "#fae3cf",
        },
        ".dark &": {
          backgroundColor: "#200845",
        },
      }}
    >
      <Container maxWidth={"xl"}>
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
              <Typography
                variant="body1"
                textAlign={"center"}
                color={"inherit"}
              >
                Lovelive Seiyuu Bot currently has 3 accounts, click the avatar
                to view them on Twitter.
              </Typography>
            </Stack>
          </Grid>
          {avatars.map((avatar) => (
            <Grid
              size={{
                xs: 12,
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
            <Stack
              direction={"column"}
              spacing={2}
              alignItems={"center"}
              mt={12}
            >
              <Typography variant="h4" textAlign={"center"} color={"inherit"}>
                {"Didn't find your favorite seiyuu on the list?"}
              </Typography>
              <ModalTrigger
                trigger={"See the list of found Lovelive Seiyuu Bots"}
                title={"List of found Lovelive Seiyuu Bots by other users"}
                content={
                  <Typography variant="body1" color="text.primary">
                    <ul>
                      {accountList.map((account) => (
                        <li key={account.screenName}>
                          <Button
                            href={`https://twitter.com/${account.screenName}`}
                            target="_blank"
                            rel="noreferrer"
                            color="info"
                          >
                            {account.name}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </Typography>
                }
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PageFoot;
