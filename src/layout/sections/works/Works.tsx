import React, {useState} from 'react';
import {S} from "./Works_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.webp";
import timerImg from "../../../assets/images/proj-2.webp"
import counterImg from "../../../assets/images/counter.jpg"
import cssImg from "../../../assets/images/css.jpg"
import nasaImg from "../../../assets/images/nasa.jpg"

import {Container} from "../../../components/Container";
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ title: string, status: TabStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Css",
        status: "css"
    },
    {
        title: "javascript",
        status: "javascript"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]

const worksData = [
    {
        id: 1,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        demo: "https://yurass23.github.io/Social-network/",
        code: "https://github.com/YuraSS23/Social-network"
    },
    {
        id: 2,
        title: "Test task CSS",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: cssImg,
        type: "css",
        demo: "https://yurass23.github.io/Test-task-Maksim/",
        code: "https://github.com/YuraSS23/Test-task-Maksim"
    },
    {
        id: 3,
        title: "NASA picture of the day",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: nasaImg,
        type: "react",
        demo: "https://yurass23.github.io/Nasa/",
        code: "https://github.com/YuraSS23/Nasa"
    },
    {
        id: 4,
        title: "Counter",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: counterImg,
        type: "react",
        demo:"https://yurass23.github.io/counter/",
        code: "https://github.com/YuraSS23/counter"
    },
    {
        id: 5,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "javascript",
        demo: "https://yurass23.github.io/Clock/",
        code: "https://github.com/YuraSS23/Clock"
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "javascript") {
        filteredWorks = worksData.filter(work => work.type === "javascript")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }
    if (currentFilterStatus === "css") {
        filteredWorks = worksData.filter(work => work.type === "css")
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }
    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px",
                                    flexGrow: 1, maxWidth: "540px"}}
                                            layout={true}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            key={w.id}
                                >
                                    <Work title={w.title}
                                          key={w.id}
                                          text={w.text}
                                          src={w.src}
                                          demo={w.demo}
                                          code={w.code}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};