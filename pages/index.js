import Head from "next/head";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import pic from "../public/picture.jpg";
import logo1 from "../public/logo1.png";
import logo2 from "../public/logo2.png";
import logo3 from "../public/logo3.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Davis Genthner Portofolio</title>
        <meta name="description" content="The Work of Davis Genthner" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Davis Genthner
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Web developer
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <Image src={pic} class="rounded-full" />
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                My Name is Davis Nigel Genthner I am currently 20 years old and
                have about 4 years work experience in various restaurants and
                fast food locations. I personally think that I learn fast, and
                bring a general positive attitude wherever I go. I got along
                with co-workers pretty well and Ive been considered decently
                funny by most of them. I personally think that I learn fast, and
                bring a general positive attitude wherever I go. I got along
                with co-workers pretty well and Ive been considered decently
                funny by most of them.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/TheTrueGameBreaker">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/davis-genthner-520190272/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.youtube.com/channel/UC9DP7I1Z0wG1U0eFlmvkE9g">
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Coding languages I know
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am proficient in Html Java and CSS, and can get just about
              anything done using a combination of all three, but I also have
              notable skills in things like tailwind, node.js mongoDB, and
              React.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={logo1} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">HTML</h3>
              <p className="py-2">
                I enjoy working with HTML and have spent time practicing it, I
                have developed a strong skillset in this area. Additionally, I
                have taken courses and read resources on HTML.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={logo3} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                This is by far my favorit language and where much of my drive
                comes from. This interest is fueled by a desire to create
                something new and solve problems. Proficiency in JavaScript
                often requires a good understanding of programming concepts such
                as variables, functions, loops, and conditional statements. I
                have a strong foundation in these areas, and put them to good
                use. Working with others and receiving feedback on my code
                contributes to my proficiency in JavaScript. JavaScript has a
                vast array of libraries and frameworks that help me write more
                efficient, effective code.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={logo2} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                CSS requires a high level of attention to detail, as small
                changes can have a big impact on the overall look and feel of a
                website. I am detail-oriented, and am suited to working with
                CSS. CSS allows for a lot of creativity, as there are many ways
                to achieve a desired visual effect. I have a good eye for design
                and enjoy exploring different options to achieve a specific
                look. I have invested time in learning the language, studying
                best practices, and experimenting with different techniques.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Bellow is are screenshots of my work. If you want to visit the
              pages you can click on the images and you will be redirected to a
              deployed application.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://pwa-davis-genthner.herokuapp.com/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://thetruegamebreaker.github.io/DavisGenthnerPasswordGenerator/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://present-pear.herokuapp.com/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://thetruegamebreaker.github.io/Quiz-game/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://thetruegamebreaker.github.io/DavisGenthnerDailyPlanner/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://thetruegamebreaker.github.io/Weather-API-Project-Fixed/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://thetruegamebreaker.github.io/DND-Character-Generator/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web7}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
