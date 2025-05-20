import React from 'react';
import {Tabs} from "@mantine/core";

function Index() {
    return (
        <Tabs defaultValue={'Specifics'} >
            <Tabs.List grow>
                <Tabs.Tab value={'Specifics'}>Specifics</Tabs.Tab>
                <Tabs.Tab value={'how'}>How to win</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel  pr={24} pl={24} pb={24} pt={16}  value={'Specifics'} >
                <ul>
                    <li>• Lottery ticket cost for 1 ticket is ~$5 USD in ZMX.</li>
                    <li>• No individual user Lottery entry limit, but only 100 tickets can be bought at a time.</li>
                    <li>• Paying for one ticket will give users a random 6-digit combination with each digit being between 0-9, for e.g. “1-9-3-2-0-4”. </li>
                    <li>• Match numbers from the left to win prizes— the more numbers that match, the bigger the prize pool you'll share in.</li>
                    <li>• Lottery uses Chainlink's implementation of VRF for true, secure randomness.</li>
                </ul>
            </Tabs.Panel>
            <Tabs.Panel pr={24} pl={24} pb={24} pt={16} value={'how'} >
                <ul>
                    <li>• Match numbers, from the left side of your ticket, to the winning numbers drawn at the end of a Lottery round.</li>
                    <li>• Matching even just the first number will win you a small prize.</li>
                    <li>• Match more numbers to win a share of a larger prize pool.</li>
                    <li>• A lottery draw occurs once a week. One lottery draw occurs every day alternating between 0 AM UTC and 12 PM UTC, next rounds after the 0 AM UTC rounds will be after 168 hours, next rounds after the 12 PM UTC rounds will be after another 168 hours.</li>
                </ul>
            </Tabs.Panel>
        </Tabs>
    );
}

export default Index;