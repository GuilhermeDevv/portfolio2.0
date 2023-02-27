import React, { useState } from 'react';
import { Button, Container, Content } from './styles';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
type props = { toggleThemeFn: () => void };

function ToggleTheme({ toggleThemeFn }: props) {
  const [isMoon, setIsMoon] = useState(false);

  return (
    <Container>
      <Content>
        <Button
          onClick={() => {
            toggleThemeFn();
            setIsMoon(!isMoon);
          }}
        >
          {isMoon ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
        </Button>
      </Content>
    </Container>
  );
}

export default ToggleTheme;
