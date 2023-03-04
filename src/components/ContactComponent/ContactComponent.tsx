import React from 'react';
import {
  LinkContact,
  ContactMe,
  Container,
  Content,
  Form,
  GoTo,
  InfoTalk,
  Input,
  Label,
  InputMessage,
  InputSubmit,
} from './styles';

import { MdEmail } from 'react-icons/md';
import { AiFillInstagram, AiOutlineArrowRight } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

export function ContactComponent() {
  return (
    <Container>
      <Content>
        <h1>Contate-me</h1>

        <ContactMe>
          <GoTo>
            <h4>Entre em contato</h4>
            <InfoTalk>
              <MdEmail size={20} />
              <label>Email</label>
              <span>glzin3006@gmail.com</span>
              <LinkContact href="#">
                IR <AiOutlineArrowRight size={12} />
              </LinkContact>
            </InfoTalk>
            <InfoTalk>
              <IoLogoWhatsapp size={20} />
              <label>Whatsapp</label>
              <span>(21) 99913-2806</span>
              <LinkContact href="#">
                IR <AiOutlineArrowRight size={12} />
              </LinkContact>
            </InfoTalk>
            <InfoTalk>
              <AiFillInstagram size={20} />
              <label>Instagram</label>
              <span>@guidev_onn</span>
              <LinkContact href="#">
                IR <AiOutlineArrowRight size={12} />
              </LinkContact>
            </InfoTalk>
          </GoTo>
          <Form action="">
            <h4>Contato rápido</h4>
            <div>
              <Input type="text" id="input-field" required autoComplete="off" />
              <Label htmlFor="input-field">Nome</Label>
            </div>
            <div>
              <Input type="text" id="input-field" required autoComplete="off" />
              <Label htmlFor="input-field">E-mail</Label>
            </div>
            <div>
              <InputMessage id="input-field" required autoComplete="off" />
              <Label htmlFor="input-field">Mensagem</Label>
            </div>
            <div>
              <InputSubmit type="submit" value="ENVIAR" />
            </div>
          </Form>
        </ContactMe>
      </Content>
    </Container>
  );
}
