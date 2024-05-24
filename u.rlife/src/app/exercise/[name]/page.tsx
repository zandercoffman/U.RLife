"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import exercises from "../../exercises.json"
import Header from '@/components/ui/header';

export default function ExericsingPage({ params }: { params: { name: string } }) {
    const router = useRouter();
    const { name } = params;
    var chosenExericse: object;

    useEffect(() => {
        if (!name) {
            router.replace('/exercise/push-up');
        }


    }, [name])

    return <>
        <main className="flex flex-col items-center justify-between mt-5">

            <div className=" text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:pl-[5%] lg:pr-[5%] lg:grid-cols-5 lg:text-left top-0">
                <Header/>
            </div>

            <div>
            {exercises.exercises
        .filter(exercise => exercise.name === name)
        .map((exercise, exerciseIndex) => 
            <>
                <h1 className="text-3xl font-bold text-left leading-20">{name}</h1> <br/>
                {exercise.steps.map((stepGroup, index) => (
                <div key={index}>
                    {/* Mapping over each step group */}
                    {stepGroup.map((step, stepIndex) => (
                        <div key={stepIndex}>
                            {/* Mapping over each step in the group */}
                            {step.map((instruction, instructionIndex) => (
                                <p key={instructionIndex}>{instruction}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
            </>
        )}

            </div>
        </main>

    </>
}