'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: '🔥 Wildfire Risk Mapping Dashboard for Western Canada (British Columbia + Alberta)',
		description: 'Built an interactive wildfire risk dashboard using MODIS fire data, vegetation indices, and burn perimeters to map high-risk zones in BC and Alberta. Automated geospatial workflows in Python (GeoPandas, Rasterio) to process satellite imagery and classify hazards, cutting manual GIS work and enabling scalable updates.',
		image: '/laptop.jpg',
		tags: ['Python + GeoPandas', 'Folium', 'QGIS', 'NrCan & NASA FIRMS'],
	},
	{
		title: '🏙️ Census-Based Socioeconomic Mapping Tool',
		description: 'Built a spatial equity analysis tool using 2021 Census data to map population density, income, and transit accessibility in Ottawa. Developed a reproducible R workflow (sf, dplyr, tmap) to support policy decisions, identify underserved areas, and run scenario-based assessments.',
		image: '/code.jpg',
		tags: ['R (language)', 'tmap', 'StatsCan Census Data', 'QGIS'],
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
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
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
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
