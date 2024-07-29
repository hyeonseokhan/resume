import { NextSeo } from 'next-seo';
import Head from 'next/head'; // NOTE next/document 와 혼돈하면 안됨
import { Container } from 'reactstrap';

import { Profile } from '../components/profile';
import { Introduce } from '../components/introduce';
import { Skill } from '../components/skill';
import { Experience } from '../components/experience';
import { Project } from '../components/project';
import { OpenSource } from '../components/openSource';
import { Article } from '../components/article';
import { Education } from '../components/education';
import { Footer } from '../components/footer';
import { Style } from '../components/common/Style';
import { DownloadButton } from '../components/common';

import ContentsPayload from '../payload';

function ResumeComponents() {
  return (
    <>
      <NextSeo {...ContentsPayload._global.seo} />
      <Head>
        <title>{ContentsPayload._global.headTitle}</title>
        <link rel="shortcut icon" href={ContentsPayload._global.favicon} />
      </Head>
      <div style={Style.box}>
        <div id="pdfArea">
          <Container style={Style.globalFont}>
            <Profile.Component payload={ContentsPayload.profile} />
            <Introduce.Component payload={ContentsPayload.introduce} />
            <Skill.Component payload={ContentsPayload.skill} />
            <Experience.Component payload={ContentsPayload.experience} />
            <Project.Component payload={ContentsPayload.project} />
            <OpenSource.Component payload={ContentsPayload.openSource} />
            <Article.Component payload={ContentsPayload.article} />
            <Education.Component payload={ContentsPayload.education} />
            <Footer.Component payload={ContentsPayload.footer} />
          </Container>
        </div>
      </div>
      <DownloadButton />
    </>
  );
}

export default ResumeComponents;
