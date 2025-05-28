import React from 'react';

function Number({number}) {
    return (
        <div className="self-stretch h-12 min-w-20 px-7 bg-background-gray-filled-hover rounded-[10px] inline-flex flex-col justify-center items-center">
            <div className="text-center justify-center text-Text-Invert-default text-base font-semibold font-['Poppins'] leading-loose">3</div>
        </div>
    );
}

export default Number;