import Header from "@/components/ui/header";
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { Badge } from "@/components/ui/badge"
  import exercises from "../exercises.json"
  import { Progress } from "@/components/ui/progress"
  import { Button } from "@/components/ui/button"
import Link from "next/link";


  

  

export default async function ExercisePage() {
    const targetGroups = [
        "chest",
        "triceps",
        "shoulders",
        "quadriceps",
        "glutes",
        "hamstrings",
        "core",
        "back",
        "biceps",
        "full body",
        "cardio",
        "arms",
        "legs",
        "lower back",
        "obliques"
    ];


    function uppercase(String: string) {
        return String.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

      
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between mt-5">

            <div className=" text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:pl-[5%] lg:pr-[5%] lg:grid-cols-5 lg:text-left top-0">
                <Header/>
                <h1 className="text-3xl font-bold text-left leading-20">All Exercises</h1> <br/>
                <Carousel className="w-full mb-[20px]">
                    <CarouselContent className="-ml-2">
                        {exercises.exercises.map((exercise, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                                <Card className="h-[100%]">
                                    <CardHeader>
                                        <CardTitle>{exercise.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{exercise.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex flex-col gap-[20px]">
                                            <div>
                                                {exercise.target_group.map((group, idx) => (
                                                <Badge key={idx} variant="outline">
                                                    #{group}
                                                </Badge>
                                                ))}
                                            </div>

                                            <div>
                                                <Link href={`/exercise/${exercise.name}`}>
                                                    <Button variant="outline" >Exercise Now</Button>
                                                </Link>
                                            </div>
                                        </div>

                                        

                                        
                                    </CardFooter>

                                    
                                </Card>
                            </CarouselItem>
                            
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div
                className="absolute inset-x-0 top-[calc(100%-26rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+5rem)]"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[rgba(255,128,181,0.8)] to-[rgba(144,137,252,0.8)] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
                </div>

                <div
                    className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-25rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-[rgba(255,128,181,0.8)] to-[rgba(144,137,252,0.8)] opacity-80 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                    />
                </div>

                <div
                    className="absolute inset-x-0 top-[calc(100%+15rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+50rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-[rgba(255,128,181,0.8)] to-[rgba(144,137,252,0.8)] opacity-80 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                    />
                </div>


                {targetGroups.map((group, index) => (
                    <>
                        <h1 className="text-3xl font-bold text-left leading-20">{uppercase(group)}</h1> <br/>
                        <Carousel className="w-full">
                            <CarouselContent className="-ml-1">
                                {exercises.exercises
                                    .filter(exercise => exercise.target_group.includes(group))
                                    .map((exercise, exerciseIndex) => (

                                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                                            <Card className="h-[100%]">
                                                <CardHeader>
                                                    <CardTitle>{exercise.name}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription>{exercise.description}</CardDescription>
                                                </CardContent>
                                                <CardFooter>
                                                    <div className="flex flex-col gap-[20px]">
                                                        <div>
                                                            {exercise.target_group.map((group, idx) => (
                                                            <Badge key={idx} variant="outline">
                                                                #{group}
                                                            </Badge>
                                                            ))}
                                                        </div>

                                                        <div>
                                                            <Link href={`/exercise/${exercise.name}`}>
                                                                <Button variant="outline" >Exercise Now</Button>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    

                                                    
                                                </CardFooter>
                                            </Card>
                                        </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <br/>
                    </>
                ))}

            </div>
        </main>
       
    </>
}