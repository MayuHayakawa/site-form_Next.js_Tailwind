import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { motion as m } from 'framer-motion';
import Confetti from "react-confetti";

export default function Success() {

    const router= useRouter();

    const [pieces, setPieces] = useState(1000);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000);
    }

    useEffect(() => {
        stopConfetti();
    },[])

    return (
        <m.main 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='h-screen items-center flex justify-center'
        >
            <div className='bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16'>
                <h1 className="text-3xl pb-4 font-latoBold">
                    Thanks for the email {router.query.name} (^_^)✨
                </h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email over at {router.query.email}. We will get back to you as soon as we can!
                </p>

            </div>
            <Confetti gravity={0.3} numberOfPieces={pieces} />
        </m.main>
    )
}