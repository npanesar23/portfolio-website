'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Cogniroute - B2B Logistics SaaS Platform',
		description: '💻 Automate 100% of your dispatch operations\n⚡️ 50+ drivers, 250+ weekly shipments managed\n🚛 $2.5k ARR from local trucking company (10+ vehicles)',
		image: '/cogniroute.png',
		tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'PostgreSQL'],
		url: 'https://cogniroute.dev',
	},
	{
		title: '🚀 Coming Soon...',
		description: 'Working on exciting new projects that combine geospatial analysis with modern web technologies. Stay tuned for updates on innovative solutions for real-world problems.',
		image: '/code.jpg',
		tags: ['In Development', 'Geospatial', 'Web Technologies', 'Innovation'],
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg"
						>
							{project.url ? (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block cursor-pointer"
								>
									<div className="aspect-[16/10] relative overflow-hidden">
										<Image src={project.image} alt={project.title} fill className="object-cover" />
										<div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
									</div>
								</a>
							) : (
								<div className="aspect-[16/10] relative overflow-hidden">
									<Image src={project.image} alt={project.title} fill className="object-cover" />
									<div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
								</div>
							)}
							<div className="p-6 -mt-16 relative z-10 bg-white/95 backdrop-blur-sm rounded-b-xl">
								<h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
								<p className="text-gray-600 mb-4 whitespace-pre-line">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
