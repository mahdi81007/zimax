import React from 'react';
import {useDisclosure} from "@mantine/hooks";
import {Button, Center, Drawer} from "@mantine/core";
import classes from './index.module.css'
function Index({title, subTitle, time, children, className}) {
    const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false)

    return (
        <div className={classes.cards}>
            <div className={classes.titled}>
                {title&& <div >{title}</div>}
                <div className={'mt-[14px] text-text-default-default text-xs'}>{subTitle}</div>
                <div className={'mt-[14px]'}>{time}</div>
            </div>
            <div className={classes.info}>
                <div className={classes['gradiant-cart']}>{children}</div>
            <Center>
                    <Button
                        variant="subtle"
                        size="md"
                        color="blue"
                        rightSection={<i className="icon-chevron"></i>}
                        onClick={openDrawer}
                    >
                        Read more
                    </Button>
            </Center>
            </div>
            <Drawer
                zIndex={999999999999999999999}
                opened={drawerOpened}
                onClose={closeDrawer}
                position="bottom"
                withCloseButton={false}
                classNames={{
                    title: 'w-full text-blue-6 font-bold text-[18px]',
                    header: 'w-full z-[9999px]',
                }}
                size="100%"
                title={
                    <div className="w-full flex justify-between items-center text-Primary">
                        {subTitle}
                        <div
                            onClick={closeDrawer}
                            className="w-[40px] h-[20px] cursor-pointer bg-background-gray-light rounded-3xl inline-flex justify-center items-center"
                        >
                            {/* SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12Z"
                                    fill="#212529"
                                />
                            </svg>
                        </div>
                    </div>
                }
            >
                <p>{children}</p>
            </Drawer>
        </div>
    );
}

export default Index;