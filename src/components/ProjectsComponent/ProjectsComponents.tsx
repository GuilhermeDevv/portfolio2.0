import React from 'react';
import imgTest from '../../../public/teste.jpg';
import { Button } from '../Button/Button';
import {
  Container,
  Content,
  Project,
  ProjectInformation,
  Info,
  Stack,
  NameProject,
} from './styles';

export function ProjectComponents() {
  return (
    <Container>
      <Content>
        <Info>
          <h1>Meus últimos projetos</h1>
          <span>
            é apenas uma previa dos projetos feito,veja mais projetos acessando
            meu GITUB clicando no botão a seguir
          </span>
          <Button text="Github" link="" />
        </Info>
        <Project>
          <img src={imgTest} />
          <ProjectInformation>
            <Stack>Front-end</Stack>
            <NameProject>Sistema Financeiro</NameProject>
          </ProjectInformation>
        </Project>
        <Project>
          <img src={imgTest} />
          <ProjectInformation>
            <Stack>Front-end</Stack>
            <NameProject>Portfolio</NameProject>
          </ProjectInformation>
        </Project>
        <Project>
          <img src={imgTest} />
          <ProjectInformation>
            <Stack>Front-end/Back-End</Stack>
            <NameProject>PedeAi</NameProject>
          </ProjectInformation>
        </Project>
      </Content>
    </Container>
  );
}
