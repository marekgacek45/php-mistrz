import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
	{
		title: 'Skondensowana wiedza',
		Svg: require('@site/static/img/book.svg').default,
		description: (
			<>
				Sprawdź unikatową kolekcję najlepszych poradników oraz kursów okraszony autorskim <code>wademekum</code>.
			</>
		),
	},
	{
		title: 'Poznaj frameworki',
		Svg: require('@site/static/img/rocket.svg').default,
		description: (
			<>
				Oprócz opanowania podstaw PHP,zagłęb się również w tajniki framweworków, takich jak <code>Laravel</code> czy{' '}
				<code>Symfony</code>.
			</>
		),
	},
	{
		title: 'Narzędzia do pracy',
		Svg: require('@site/static/img/computer.svg').default,
		description: (
			<>
				Nie trać czasu na niesprawdozne narzędzia oraz paczki. Tutaj znajdziesz cały <code>niezbędnik</code> który
				ułatwi Ci pracę!
			</>
		),
	},
]

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} role='img' />
			</div>
			<div className='text--center padding-horiz--md'>
				<Heading as='h3'>{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
