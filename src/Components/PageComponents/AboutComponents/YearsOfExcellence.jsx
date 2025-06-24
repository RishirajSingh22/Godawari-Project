import style from "../AboutComponents/styles/yearsOfExperience.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/material";

const keyToMap = [
  {
    year: "1999",
    title: "The Beginning",
    description:
      "Foundations laid for steel production via the sponge iron route.",
    color: "error",
  },
  {
    year: "2001",
    title: "Sponge Iron Takes Shape",
    description: "Sponge iron production commences with 105,000 TPA capacity.",
    color: "primary",
  },
  {
    year: "2002",
    title: "Captive Energy",
    description: "Launches Phase 1 of a 10 MW waste heat recovery plant.",
    color: "success",
  },
  {
    year: "2003",
    title: "Steel Billets",
    description: "Commercial production of 150,000 TPA steel billets begins.",
    color: "error",
  },
  {
    year: "2005",
    title: "Product Range Expansion",
    description: "Commissions a 60,000 TPA Hard Black (HB) wire plant.",
    color: "primary",
  },
  {
    year: "2006",
    title: "A Public Leap Forward",
    description: [
      "Raises ₹7,000 Lacs via IPO & gets listed on NSE & BSE.",
      "Adds 16,500 TPA ferroalloy facilities.",
    ],
    color: "success",
  },
  {
    year: "2008",
    title: "Growth Investments",
    description: [
      "Raises funds for establishing a 0.6 MTPA iron ore pellet plant.",
      "Acquires a 75% stake in AHL.",
    ],
    color: "error",
  },
  {
    year: "2010",
    title: "Vertical Integration",
    description: [
      "Secures 3.22 MTPA raw material yield through iron ore mining.",
      "Commissions a 0.6 MTPA iron ore pellet plant.",
    ],
    color: "primary",
  },
  {
    year: "2011",
    title: "Renewable Energy Milestone",
    description: "Commissions a 20 MW biomass power plant using rice husk.",
    color: "success",
  },
  {
    year: "2013-18",
    title: "Capacity Enhancements",
    description: [
      "Pellet capacity grows to 2.7 MTPA.",
      "Enhances HB wire & TMT iron beneficiation capacity.",
    ],
    color: "error",
  },
  {
    year: "2020",
    title: "Pre-Fabrication Structures",
    description: [
      "Invests in a 110,000 TPA welded structure facility.",
      "Expands hot rolled coil production.",
    ],
    color: "primary",
  },
  {
    year: "2021",
    title: "Business Growth",
    description: [
      "Decors join Electrosteel.",
      "Boosts iron ore production to 2.3 MTPA.",
    ],
    color: "success",
  },
  {
    year: "2022",
    title: "Solar Power Expansion",
    description: "Commissions a 10 MW solar power plant.",
    color: "error",
  },
  {
    year: "2023",
    title: "Strategic Investments",
    description: [
      "Commissions a 15 MW solar power plant across subsidiaries.",
      "Increases billets capacity to 525,000 TPA.",
    ],
    color: "primary",
  },
  {
    year: "2024",
    title: "New Frontiers",
    description: [
      "Develops a 2 MTPA pellet plant in Raipur.",
      "Increases wire rod production capacity to 200,000 TPA.",
      "Strengthens ferroalloy & TMT bar production.",
      "Initiates planning for a 2 MTPA greenfield steel plant.",
    ],
    color: "success",
  },
];

export default function YearsOfExcellence() {
  return (
    <>
      <section className={style.YearsOfExperienceSection}>
        <div className="container-fluid">
          <div className={style.yoeAllContent} data-aos="fade-up">
            <div className={style.yearOfExpContent}>
              <div className="wow animate__animated animate__slideInDown">
                <img src="https://i.ibb.co/sJHgqndJ/25-2.png" alt="" className={style.imgae25}/>
              </div>
              <h3 className="pt-3">
                 Years of Excellence &  Innovation
              </h3>
              <p>
                From its inception in 1999 to becoming a leading integrated
                steel company in India, <br /> GPIL’s journey is marked by
                groundbreaking achievements.
              </p>
            </div>
            <div className={`container-fluid wow animate__animated animate__backInLeft  ${style.yearOfExpTimeline}`}>
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: { xs: 0.5, sm: 0.2, md: 0.1 },
                    textAlign: "left",
                    marginLeft: {
                      xs: "0px",
                      sm: "25px",
                      md: "30px",
                    }
                  },
                  marginBottom: "0",
                }}
              >
                {keyToMap.map((event, index) => (
                  <TimelineItem key={index} >
                    <TimelineOppositeContent
                      color="textSecondary"
                    >
                      <strong className={style.timelineyear}>
                        {event.year}
                      </strong>
                    </TimelineOppositeContent>
                    <TimelineSeparator
                    >
                      <TimelineDot

                        sx={{
                          backgroundColor: "#E2322C",
                          width: {
                            xs: "15px",
                            sm: "25px",
                            md: "25px",
                          },
                          height: {
                            xs: "15px",
                            sm: "25px",
                            md: "25px",
                          },
                          marginLeft: {
                            xs: "0",
                            sm: "10px",
                            md: "20px",
                          },
                          margin: "0",
                          padding: "0",
                        }}
                      />
                      {index !== keyToMap.length - 1 && (
                        <TimelineConnector

                          sx={{
                            height: "100%",
                            width: {
                              xs: "1px",
                              sm: "1px",
                              md: "1px",
                            },
                            // minHeight: {
                            //   xs: "100px",
                            //   sm: "40px",
                            //   md: "40px",
                            // },
                            marginLeft: {
                              xs: "0px",
                              sm: "10px",
                              md: "18px",
                            },

                            margin: "0",
                            padding: "0",

                            // backgroundColor: "#fff",
                          }}
                        />
                      )}
                    </TimelineSeparator>
                    <Box
                      sx={{
                        width: {
                          xs: "40px",
                          sm: "90px",
                          md: "130px",
                        },
                        height: {
                          xs: "1px",
                          sm: "1px",
                          md: "1px",
                        },
                        backgroundColor: "#fff",
                        marginRight: "10px",
                        marginTop: {
                          xs: "6px",
                          sm: "10px",
                          md: "12px",
                        },
                        // border: "0.5px solid #a9a9a9", 
                      }}
                    />

                    <TimelineContent sx={{ margin: "0px", padding: "0" }}>
                      <h3 className={style.timelineTitle}>{event.title}</h3>
                      {Array.isArray(event.description) ? (
                        <ul className={style.timelineDescription}>
                          {event.description.map((point, i) => (
                            <li key={i} className={style.descriptionPoint}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={style.timelineDescription}>
                          {event.description}
                        </p>
                      )}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
