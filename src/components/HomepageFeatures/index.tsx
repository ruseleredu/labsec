import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: React.ReactNode; // Changed to ReactNode to allow links
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Link to="https://www.utfpr.edu.br">
        Universidade Tecnológica Federal do Paraná (UTFPR)
      </Link>
    ),
    Svg: require("@site/static/img/UTFPR_logo.svg").default,
    description: (
      <>
        A UTFPR é uma das universidades mais renomadas do Brasil. O seu padrão de ensino é inspirado no modelo de universidade politécnica europeia. É especializada em ciências naturais e engenharia.
      </>
    ),
  }, 
  {
    title: (
      <Link to="https://utfpr.curitiba.br/daelt/">
        Departamento Acadêmico de Eletrotécnica (DAELT)
      </Link>
    ),
    Svg: require("@site/static/img/LogoDAELT.svg").default,
    description: (
      <>
        O Departamento Acadêmico de Eletrotécnica do Câmpus Curitiba da UTFPR é responsável pela organização das atividades de ensino, pesquisa e extensão na área de Engenharia Elétrica e de Controle.
      </>
    ),
  },
    {
    title: (
      <Link to="http://www.daeln.ct.utfpr.edu.br/">
        Departamento Acadêmico de Eletrônica (DAELN)
      </Link>
    ),
    Svg: require("@site/static/img/UTFPR_logo.svg").default,
    description: (
      <>
        O
Departamento Acadêmico de Eletrônica do Câmpus Curitiba da UTFPR é a unidade responsável por coordenar e ministrar os cursos e disciplinas da área de Eletrônica.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
