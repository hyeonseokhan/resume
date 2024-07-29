import { PropsWithChildren, useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import { Style } from './Style';
import Util from './Util';

export function DownloadButton() {
  const [isDisabled, setDisabled] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setDisabled(window.innerWidth < 230 * 3.77953);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handlePDF = async () => {
    setDisabled(true);
    try {
      await Util.generatePDF();
    } finally {
      setDisabled(false);
    }
  };
  return isDisabled ? (
    <></>
  ) : (
    <Button style={Style.downloadBtn} onClick={handlePDF}>
      <FontAwesomeIcon icon={faFileDownload} style={{ marginRight: '8px' }} />
      Download
    </Button>
  );
}

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

// eslint-disable-next-line react/require-default-props
export function HrefTargetBlank({ url, text }: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </a>
  );
}
