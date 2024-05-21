import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header";
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-5">

      <div className=" text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left top-0">
        <Header/>

        <div className="flex w-full mb-8">
          <div className="w-1/2">
            <h1 className="text-7xl font-bold text-left leading-20">Ever wanted to better yourself?</h1> <br/>
            <p className="text-2xl text-left">Look no forward than to <b>u.rlife</b>, a newfound startup supporting personal growth at any life stage.</p> <br/>
            <div className="flex flex-row gap-2">
              <Button>Get Started Now</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="w-1/2">
            
          </div>
        </div>

        <Separator />

        
        <div className="flex w-full mb-8">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-left leading-20 mt-8">The Path</h1> <br/>
            <p className="text-2xl text-left">Healthy living requires time and effort, but it's achievable.</p> <br/>
            <p className="text-2xl text-left">We believe there are three key principals to life; one cannot thrive without the others.</p> 

          </div>
          <div className="w-1/2 pl-[60px]">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <h1 className="text-3xl font-bold text-left leading-20 mt-8">1. Physical</h1> <br/>
                <p className="text-1xl text-left">
                 Physical activity strengthens the body, mental well-being benefits from stress management and social support, and proper nutrition fuels bodily functions and enhances immunity, collectively ensuring vitality and resilience.
                  </p> 

              </CarouselItem>
              <CarouselItem>
                <h1 className="text-3xl font-bold text-left leading-20 mt-8">2. Mental</h1> <br/>
                <p className="text-1xl text-left">
                Mental health is about how we think, feel, and interact with the world. It involves managing stress, maintaining relationships, and finding joy in life. Prioritizing mental health boosts resilience, enhances well-being, and reduces the risk of mental health disorders.
                  </p> 
              </CarouselItem>
              <CarouselItem>
                <h1 className="text-3xl font-bold text-left leading-20 mt-8">3. Nutritional</h1> <br/>
                <p className="text-1xl text-left">
                Nutritional health is about eating a balanced diet rich in essential nutrients to support bodily functions and overall well-being. Prioritizing nutrition boosts physical health, strengthens the immune system, and prevents chronic diseases.
                  </p> 
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          </div>
        </div>

        <Separator />

        <div className="flex w-full mb-8 mt-8">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-left leading-20 mt-8">It's as easy as</h1> <br/>
            <p className="text-2xl text-left"><b>1.</b> Click on your dashboard</p> <br/>
            <p className="text-2xl text-left"><b>2.</b> Fill out information to your wanting</p> <br/>
            <p className="text-2xl text-left"><b>3.</b> Continue forwards with <b>u.rlife</b>.</p>
            <div className="flex flex-row gap-2 mt-4">
              <Button>Start today!</Button>
            </div>
          </div>
          <div className="w-1/2">
            
          </div>
        </div>


        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[rgba(255,128,181,0.8)] to-[rgba(144,137,252,0.8)] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>



      </div>

      
      
    </main>
  );
}
