import React from 'react';
import YourBank from '../../assets/yourBank.jfif';
import SantosConstrucao from '../../assets/santosConstrucao.jfif';
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
            meu GITHUB clicando no botão a seguir
          </span>
          <Button text="Github" link="https://github.com/GuilhermeDevv" />
        </Info>
        <Project>
          <img src={YourBank} alt="" />
          <ProjectInformation>
            <Stack>Fullstack</Stack>
            <NameProject>Your Bank</NameProject>
          </ProjectInformation>
        </Project>
        <Project>
          <img src={SantosConstrucao} alt="" />
          <ProjectInformation>
            <Stack>FrontEnd</Stack>
            <NameProject>Santos construção</NameProject>
          </ProjectInformation>
        </Project>
      </Content>
    </Container>
  );
}
