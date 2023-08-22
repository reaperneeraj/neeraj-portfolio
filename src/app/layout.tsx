import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Neeraj Gautam</title>
				<meta name="description" content="Neeraj Gautam's personal website" />
				<meta name="author" content="Neeraj Gautam" />

				{/* OG */}
				<meta property="og:title" content="Neeraj Gautam" />
				<meta property="og:description" content="Neeraj Gautam's personal website" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://neerajgautam.com" />
				<meta property="og:image" content="/thumb.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
			</head>
			<body className='max-w-screen-sm mx-auto selection:bg-primary selection:text-black font-ubuntu bg-black text-white'>
				<div>
					{children}
				</div>
			</body>
		</html>
	)
}
