import React from 'react';
import {Button, Drawer} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

function Index({
                   title,
                   className,
                   children,
                   isMore = true
               }) {
    const [drawerOpened, {open: openDrawer, close: closeDrawer}] = useDisclosure(false);

    return (
        <>
            <div
                className={`${className} mt-[24px] p-6 bg-gradient-to-b from-Background-default-hover to-Background-Primary-low rounded-3xl outline outline-1 outline-offset-[-1px] outline-Border-default`}>
                <div className={'text-[20px] weight-bold'}>{title}</div>
                <div className={'relative overflow-hidden'}>
                    <div className="self-stretch h-[100px] bg-gradient-to-b from-white to-white/0"></div>
                    <div className={`left-0 top-0 ${!isMore ? '' : 'absolute'} `}>
                        {children}
                    </div>
                    {isMore && <Button variant={'Subtle'} size={'md'} color={'Slate'}
                                       right={<i className={'icon-chevron text-[16px]'}></i>}
                                       onClick={() => openDrawer()}
                    >
                        Read more
                    </Button>}

                </div>
                {isMore &&
                    <Drawer opened={drawerOpened} onClose={closeDrawer} position={'bottom'} withCloseButton={false}
                            classNames={{title: 'w-full', header: 'w-full'}}
                            size="100%"
                            title={<div className={'w-full flex justify-between item-center text-Primary'}>{title}
                                <div onClick={() => closeDrawer()}
                                     className={'w-[40px] h-[20px] bg-Background-Gray-light rounded-3xl inline-flex justify-center items-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12Z"
                                            fill="#212529"/>
                                    </svg>
                                </div>
                            </div>}
                    >
                        <p>{children}</p>
                    </Drawer>}

            </div>
        </>
    );
}

export default Index;