import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/neeraj.jpg';
import logo from '../../assets/logo.png'

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<div className='flex gap-3 items-center'>
						<h1 className="text-4xl font-medium">
							Neeraj <span className="text-primary">Gautam</span>
						</h1>
						<Image src={logo} alt="Neeraj's Logo" className='w-20 h-auto' height={200} width={200}/>
					</div>
					<p>
					Logic Libationist | Student | <span className="font-bold">Tribhuvan University IOST</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
					I'm Neeraj Gautam, a student at Tribhuvan University IOST, Mechi Multiple Campus. Passionate about crafting user-friendly interfaces, I'm delving into software development. Besides coding, I enjoy delving into diverse programming languages. When not coding, I capture nature's beauty through my camera lens.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Neeraj Gautam"
					className="object-cover w-auto h-78 md:w-48 md:h-auto "
					width={300}
					height={300}
					placeholder='blur'
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/20" aria-label="DoB: 1999AD">
					2002
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/20" aria-label="Blood group: O+VE">
					A+
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/20" aria-label="Height: 5 feet 8 and a half inches">
					<span>5'7</span>
				</div>
			</div>

			<Education />

			{/* <Projects /> */}

			{/* <Inprogress /> */}

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:mail@neerajgautam.com" className="italic underline text-primary">
							mail@neerajgautam.com
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Neeraj Gautam ' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>original site</a>
			</p>
		</div>
		
	);
};

export default Page;