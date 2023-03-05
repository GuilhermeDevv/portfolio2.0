import {
  AboutMe,
  Background,
  Card,
  Container,
  Content,
  ContentCard,
  InfoSeparator,
  MoreInfo,
  Text,
} from './styles';
import { RiSuitcaseLine } from 'react-icons/ri';
import { MdHeadsetMic } from 'react-icons/md';
import { AiTwotoneExperiment } from 'react-icons/ai';

export function AboutComponent() {
  return (
    <Container>
      <Content>
        <MoreInfo>
          <Text>Sobre mim</Text>
          <InfoSeparator>
            <div>
              <Background />
            </div>
            <AboutMe>
              <ContentCard>
                <Card>
                  <AiTwotoneExperiment size={30} />
                  <h6>experiência</h6>
                  <strong>+ 1 ano de experiencia</strong>
                </Card>
                <Card>
                  <RiSuitcaseLine size={30} />
                  <h6>Praticidade</h6>
                  <strong>+10 Projetos concluídos.</strong>
                </Card>
                <Card>
                  <MdHeadsetMic size={30} />
                  <h6>disponível</h6>
                  <strong>disponível 10h/6 dias</strong>
                </Card>
              </ContentCard>
              <p>
                programo como um fullstack, mas com foco no front-end,
                habilidades em HTML, CSS, JavaScript, TypeScript, React,
                Node.js, Express e MongoDB, capaz de criar sites atraentes. sou
                Versátil e interessado em projetos desafiadores.
              </p>
            </AboutMe>
          </InfoSeparator>
        </MoreInfo>
      </Content>
    </Container>
  );
}
