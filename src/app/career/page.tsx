import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid2 as Grid,
} from "@mui/material";
import Banner from "@/components/Banner";
import CareerTitle from "@/components/titles/CareerTitle";

const CareerPage: React.FC = () => {
  const skills = {
    frontend: [
      {
        title: "React",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "React Router",
          "Zustand",
          "Material UI",
          "Color Scheme with CSS Variables",
          "Bundle Splitting Optimization",
        ],
      },
      {
        title: "Next.js",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "App Router",
          "SEO for this website",
          "Bundle Size Optimization",
          "Static Site Export",
        ],
      },
    ],
    backend: [
      {
        title: "Django",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "Django ORM Query Techniques",
          "Django Rest Framework",
          "Django View Callbacks",
          "Django Signals",
          "Gunicorn",
        ],
      },
      {
        title: "Elasitcsearch",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "Elasticsearch DSL",
          "Elasticsearch Node Configuration",
          "Elasticsearch Benchmarking",
          "Query Performance of Production Data",
        ],
      },
      {
        title: "Nginx",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "Reverse Proxy for Django",
          "Static File Serving",
          "SSL Management",
        ],
      },
    ],
    devops: [
      {
        title: "Docker",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "Dockerfile",
          "Docker Image Cache Techniques",
          "Docker in Docker",
        ],
      },
      {
        title: "Google Cloud Platform",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "Serverless Functions",
          "Cost Optimization",
          "Automation using SDK",
        ],
      },
      {
        title: "GitLab CI/CD",
        imgSrc: "/images/skills/react.svg",
        keypoints: [
          "GitLab Webhooks",
          "Pipeline Configuration",
          "Runner on GCP",
          "Worker Autoscaling",
        ],
      },
    ],
  };

  return (
    <Stack direction={"column"}>
      <Banner background={"/images/home_banner_d.jpg"} brightness={0.5}>
        <CareerTitle />
      </Banner>
      <Box component={"section"} p={4}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              Skills
            </Typography>
            <Grid
              container
              rowGap={2}
              spacing={2}
              columns={{
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
              }}
            >
              <Grid
                size={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 4,
                }}
              >
                <Typography variant="h4">Frontend</Typography>
              </Grid>
              {skills.frontend.map((skill, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 1,
                  }}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"stretch"}
                >
                  <Card>
                    <CardHeader
                      title={skill.title}
                      avatar={<Avatar src={skill.imgSrc} alt={skill.title} />}
                      sx={{
                        "& .MuiCardHeader-title": {
                          fontSize: "24px",
                          fontWeight: 600,
                        },
                      }}
                    />
                    <CardContent>
                      <ul>
                        {skill.keypoints.map((keypoint, index) => (
                          <li key={index}>{keypoint}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <Grid
                size={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 4,
                }}
              >
                <Typography variant="h4">Backend</Typography>
              </Grid>
              {skills.backend.map((skill, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 1,
                  }}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"stretch"}
                >
                  <Card>
                    <CardHeader
                      title={skill.title}
                      avatar={<Avatar src={skill.imgSrc} alt={skill.title} />}
                      sx={{
                        "& .MuiCardHeader-title": {
                          fontSize: "24px",
                          fontWeight: 600,
                        },
                      }}
                    />
                    <CardContent>
                      <ul>
                        {skill.keypoints.map((keypoint, index) => (
                          <li key={index}>{keypoint}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <Grid
                size={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 4,
                }}
              >
                <Typography variant="h4">DevOps</Typography>
              </Grid>
              {skills.devops.map((skill, index) => (
                <Grid
                  key={index}
                  size={{
                    xs: 1,
                  }}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"stretch"}
                  justifyContent={"stretch"}
                >
                  <Card>
                    <CardHeader
                      title={skill.title}
                      avatar={<Avatar src={skill.imgSrc} alt={skill.title} />}
                      sx={{
                        "& .MuiCardHeader-title": {
                          fontSize: "24px",
                          fontWeight: 600,
                        },
                      }}
                    />
                    <CardContent>
                      <ul>
                        {skill.keypoints.map((keypoint, index) => (
                          <li key={index}>{keypoint}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quos in eos, error libero cupiditate accusantium, odio repudiandae
              doloribus quam modi sed doloremque recusandae repellat saepe vitae
              quis distinctio atque.
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              Work Experience
            </Typography>

            <Typography variant="body1" textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quos in eos, error libero cupiditate accusantium, odio repudiandae
              doloribus quam modi sed doloremque recusandae repellat saepe vitae
              quis distinctio atque.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default CareerPage;
