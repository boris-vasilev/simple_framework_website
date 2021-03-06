/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div>
        <img src={props.img_src} alt="Project Logo" style={{'height': '300px'}}/>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <Logo img_src={`${baseUrl}img/SIMPLE_Logo.png`} />
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            {/*<Button href="#try">Try It Out</Button>*/}
            {/*<Button href={docUrl('deployment_guide_htcondor.html')}> Learn More </Button>*/}
            <Button href="https://indico.cern.ch/event/869667/contributions/3670162/">Learn More</Button>
            <Button href="/docs/deployment_guide_htcondor">Deploy HTCondor</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );
    const PoweredBy = () => (
        <Block>

        </Block>
    )
    const Features = () => (
      <Block layout="fourColumn" background='dark'>
        {[
          {
            content: 'Pick from a curated set of containerized services that abstract low-level configuration requirements.',
            image: `${baseUrl}img/docker.svg`,
            imageAlign: 'top',
            title: 'Pre-configured services ',
          },
          {
            content: 'Validates your configuration and infrastructure. Save time by avoiding common pitfalls. ',
            image: `${baseUrl}img/python.svg.png`,
            imageAlign: 'top',
            title: 'Validation Engines',
          },
          {
            content: 'Comes loaded with sensible default values for commonly used configuration parameters.',
            image: `${baseUrl}img/yaml.png`,
            imageAlign: 'top',
            title: 'Minimizes configuration',
          },
          {
            content: 'Just describe what you want to deploy, and where. We take care of the rest. The user need not be an expert of the underlying tech-stack.',
            image: `${baseUrl}img/puppet-vector-logo.svg`,
            imageAlign: 'top',
            title: 'Abstraction of Tech-Stack',
          },
        ]}
      </Block>
    );
    const UnderConstruction = () => {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <img style={{'height': '50px'}} src='img/under_construction.png'/>
                The site is under construction. Talk to us directly (<a href={'help'}>Link</a>)
                <img style={{'height': '50px'}} src='img/under_construction.png'/>
            </div>
        )
    }

    const QuickLinks = () => {
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <Button href="">Slack</Button>
            </div>
        )
    }
    const SupportedServices = () => {
        if ((siteConfig.supportedServices || []).length === 0) {
            return null;
        }
        const supportedServices = siteConfig.supportedServices
        return (
            <div
                className=" paddingBottom"
                style={{textAlign: 'center'}}>
                <h1>Currently supported WLCG services</h1>
                <Block  layout="fourColumn">
                    {supportedServices}
                </Block>
            </div>
        )
    }

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        {/*<UnderConstruction/>*/}
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <SupportedServices/>
          {/*<FeatureCallout />*/}
          {/*<LearnHow />*/}
          {/*<TryOut />*/}
          {/*<Description />*/}
          {/*<Showcase />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
