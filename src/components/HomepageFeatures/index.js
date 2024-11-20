import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Write code for the joy of it.</Translate>,
    Svg: require('@site/static/img/website/feature-write-code-for-joy.svg').default,
    description: (
      <>
      <Translate>
        Laravel values beauty. We love clean code just as much as you do. Simple, elegant syntax puts amazing functionality at your fingertips. Every feature has been thoughtfully considered to provide a wonderful developer experience.
      </Translate>
      </>
    ),
  },
  {
    title: <Translate>One Framework, Many Flavors.</Translate>,
    Svg: require('@site/static/img/website/feature-one-framework-many-flavors.svg').default,
    description: (
      <>
      <Translate>
        Build robust, full-stack applications in PHP using Laravel and Livewire. Love JavaScript? Build a monolithic React or Vue driven frontend by pairing Laravel with Inertia.
      </Translate>
      <br></br>
      <Translate>
        Or, let Laravel serve as a robust backend API for your Next.js application, mobile application, or other frontend. Either way, our starter kits will have you productive in minutes.
      </Translate>
      </>
    ),
  },
  {
    title: <Translate>Everything you need to be amazing.</Translate>,
    Svg: require('@site/static/img/website/feature-everything-to-be-amazing.svg').default,
    description: (
      <>
      <Translate>
        Out of the box, Laravel has elegant solutions for the common features needed by all modern web applications. It's time to start building amazing applications and stop wasting time searching for packages and reinventing the wheel.
      </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding--md padding-bottom--lg">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="text--left">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
