import React from 'react';
import Animation from "@/components/Animation";
import Cart from "@/components/Cart";
import {Container} from "@mantine/core";

function Index() {
    const list = [
        {
            id: 1,
            text: 'All rewards is sent directly to participants wallet and can be tracked on the blockchain.'
        }, {
            id: 2,
            text: 'The platform does not store users fund and has no access to them.'
        }, {
            id: 3,
            text: 'No need to request a withdrawal and wait.'
        }, {
            id: 4,
            text: 'Maximum income depends on nothing but participants own efforts.'
        }, {
            id: 5,
            text: 'This program only accepts USDT (on Binance Smart Chain) as a means of payment to ensure greater convenience, clarity, and stability of income for the participants.'
        },
    ]
    return (
        <>
            <Animation/>
            <Container mt={32}>

                <Cart title={'Brand New Economy'}
                      children={'The ZiMax Influencers Income Program is designed for influencers, celebrities, Vloggers, and individuals with a significant following and their own community. ZiMax provides a package that enables them to launch their decentralized crypto business independently with their customized landing page, website, own domain name'}/>

                <Cart isMore={false} children={<div>
                    <div className="text-center  text-xs font-semibold  leading-normal">3.9
                        Millions
                    </div>
                    <div className="self-stretch text-center justify-center"><span
                        className=" font-bold  leading-loose">Estimated </span><span
                        className=" font-bold  leading-loose">total trades:</span><b
                        className=" font-bold  leading-loose"> Approximately</b></div>
                    <div className="text-center justify-center  text-xs font-semibold  leading-normal">10,000</div>
                </div>}

                      title={<div className="self-stretch text-center justify-center font-bold">
                          <span
                              className="text-Text-Default-title text-base font-bold  leading-loose">Estimated all-time </span><span
                          className="    leading-loose">trade volume:<br/></span><span
                          className=" font-bold  leading-loose">Approximately</span></div>}/>

                <Cart title={<div className=" font-bold  leading-10 text-center justify-center">
                    <span>Fair marketing by ZiMax<br/></span><span
                    className={'text-Text-Primary-default'}>You Work</span><span> = </span><span
                    className={'text-Text-Primary-default'}>You Earn</span>
                </div>} isMore={false}
                      children={<ul className=" text-sm">
                          {
                              list.map((item) => (
                                  <li id={item.id}>{item.text}</li>
                              ))
                          }
                      </ul>}/>
            </Container>

        </>
    );
}

export default Index;