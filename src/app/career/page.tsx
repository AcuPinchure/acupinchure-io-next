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
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from "@mui/material";
import Banner from "@/components/Banner";
import CareerTitle from "@/components/titles/CareerTitle";
import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career - AcuPinchure",
  description:
    "Engineering Smarter, Faster, Better. Crafting tailored solutions that drive efficiency, scalability, and performance across full-stack systems—transforming complex challenges into optimized outcomes.",
  keywords: [
    "acupinchure",
    "portfolio",
    "full-stack",
    "career",
    "skills",
    "experience",
    "next.js",
    "react",
    "django",
    "elasticsearch",
    "docker",
    "google cloud platform",
    "gitlab",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "AcuPinchure",
    },
  ],
  other: {
    "revisit-after": "14 days",
    "Content-Type": "text/html; charset=utf-8",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/icons/favicon-48x48.png",
      sizes: "48x48",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/icons/favicon.svg",
    },
    {
      rel: "shortcut icon",
      url: "/icons/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/apple-touch-icon.png",
    },
  ],
  appleWebApp: {
    title: "AcuPinchure",
  },
};

const CareerPage: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      description:
        "The frontend technologies I have worked with are mostly React ecosystem. Including UI Libraries, State Management, and Server Side Rendering.",
      skills: [
        {
          title: "React",
          imgSrc: "/images/skills/react.svg",
          keypoints: [
            "React Router",
            "Zustand",
            "Material UI / Semantic UI",
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
    },
    {
      category: "Backend",
      description:
        "I have worked with Django for more than 2 years. I am comfortable with most of the components of Django, including DRF. As a backend developer, besides RDBMS, I have also worked with Elasticsearch for some projects.",
      skills: [
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
    },
    {
      category: "DevOps",
      description:
        "In order to optimize cost efficiency, I have worked with Docker, GCP, and GitLab CI/CD. I am capable of constructing a full web service using GCP resources, with or without serverless structure.",
      skills: [
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
    },
  ];

  const experience = [
    {
      title: "Sinotech",
      period: "2022.06 - 2024.05",
      description:
        "Internal web service maintenance and development, including:",
      keypoints: [
        "Construction-related documents composition tools.",
        "Forum System for onsite engineers.",
        "Construction journal and progress management system.",
      ],
    },
    {
      title: "Big Data",
      period: "2024.05 - Present",
      description:
        "Working with company's Saas products and system optimization.",
      keypoints: [
        "Survey contract management platform.",
        "Migrate legancy projects to serverless architecture.",
        "Cost-efficient GitLab CI/CD runner using serverless functions on Google cloud platform.",
        'Elasticsearch performance assessment and optimization on our main product: "KEYPO".',
      ],
    },
  ];

  return (
    <Stack direction={"column"}>
      <Banner background={"/images/home_banner_d.jpg"} brightness={0.5}>
        <CareerTitle />
      </Banner>
      <Box component={"section"}>
        <Container maxWidth={"md"}>
          <Stack
            direction={"column"}
            py={12}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"} mt={4}>
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
              }}
            >
              {skills.map((skill, index) => (
                <Fragment key={index}>
                  <Grid
                    size={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                    }}
                  >
                    <Typography variant="h4" mt={4}>
                      {skill.category}
                    </Typography>
                    <Typography variant="body1" mt={2}>
                      {skill.description}
                    </Typography>
                  </Grid>
                  {skill.skills.map((skill, index) => (
                    <Grid
                      key={index}
                      size={{
                        xs: 1,
                      }}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"stretch"}
                    >
                      <Card
                        sx={{
                          height: "100%",
                        }}
                      >
                        <CardHeader
                          title={skill.title}
                          avatar={
                            <Avatar src={skill.imgSrc} alt={skill.title} />
                          }
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
                </Fragment>
              ))}
            </Grid>
          </Stack>
        </Container>
        <Container maxWidth={"md"}>
          <Stack
            direction={"column"}
            py={12}
            minHeight={"100vh"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
            id={"experience"}
          >
            <Typography variant="h3" textAlign={"center"}>
              Work Experience
            </Typography>

            <Stepper orientation="vertical">
              {experience.map((exp, index) => (
                <Step key={index} active>
                  <StepLabel>
                    <Typography variant="h5">{exp.title}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography>{exp.description}</Typography>
                    <ul>
                      {exp.keypoints.map((keypoint, index) => (
                        <li key={index}>{keypoint}</li>
                      ))}
                    </ul>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default CareerPage;
