import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function AboutTabs() {


    return (
        <Tabs className="AboutTabs mb-10">
            <TabList className="flex gap-10 mb-2">
                <Tab className="border-none text-lg text-gray-600 font-medium outline-none cursor-pointer">About Me</Tab>
                <Tab className="border-none text-lg text-gray-600 font-medium outline-none cursor-pointer">Education</Tab>
                <Tab className="border-none text-lg text-gray-600 font-medium outline-none cursor-pointer">Skills & Abilities</Tab>
            </TabList>

            <TabPanel>
                <p className='font-medium text-gray-900'>I am a passionate Frontend Developer and Senior UI Designer, driven to create web and app designs that are both user-friendly and visually appealing. With over 7+ years of experience, I am skilled in HTML5, CSS3, JavaScript, ReactJS, Bootstrap, and Tailwind. My approach to design focuses not only on functionality but also on deeply understanding the user experience, allowing me to bring fresh and intuitive solutions to every project.</p>
            </TabPanel>
            <TabPanel>
                <p> amet, consectetur adipisicing elit. Sequi deleniti eveniet aliquam labore illum officiis assumenda veritatis nulla odio, dignissimos autem provident ipsa perferendis, suscipit recusandae asperiores obcaecati tempora vero.</p>
            </TabPanel>
            <TabPanel>
                <p> elit. Sequi deleniti eveniet aliquam labore illum officiis assumenda veritatis nulla odio, dignissimos autem provident ipsa perferendis, suscipit recusandae asperiores obcaecati tempora vero.</p>
            </TabPanel>
        </Tabs>
    )
}

export default AboutTabs