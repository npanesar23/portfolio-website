import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nitish Panesar - UW Geomatics Student',
	description:
		'Welcome to my portfolio! I’m an Honours Geomatics student at the University of Waterloo with a strong foundation in geospatial technologies, data analysis, and software engineering. I specialize in building scalable, map-driven applications and processing spatial data using modern tools like Python, PostGIS, and GDAL. I bring a blend of spatial insight and engineering precision to every project.',
	keywords: [
		'Geospatial Developer',
		'Geomatics Student',
		'Python GIS Developer',
		'Spatial Data Science',
		'Remote Sensing Analysis',
		'GIS Software Engineer',
		'University of Waterloo Geomatics',
		'GeoPandas Developer',
		'PostGIS Specialist',
		'QGIS Automation',
		'ArcGIS Pro Workflows',
		'Geospatial Visualization',
		'Open Source GIS',
		'Spatial Machine Learning',
		'Nitish Panesar',
	],
	authors: [{ name: 'Nitish Panesar' }],
	creator: 'Nitish Panesar',
	openGraph: {
		title: 'Nitish Panesar - Geospatial Engineer & Data Developer',
		description: 'University of Waterloo Geomatics student with a focus on geospatial intelligence and software development. Explore my projects in GIS, spatial data analysis, and modern Python-based tooling for real-world applications.',
		url: 'https://nitishpanesar.com',
		siteName: 'Nitish Panesar - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Nitish Panesar - Geospatial Engineer & Data Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nitish Panesar - Geospatial Engineer & Data Developer',
		description: 'University of Waterloo Geomatics student with a focus on geospatial intelligence and software development. Explore my projects in GIS, spatial data analysis, and modern Python-based tooling for real-world applications.',
		creator: '@NitishPanesar',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
