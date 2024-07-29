import 'bootstrap/dist/css/bootstrap.min.css';

import { NextComponentType } from 'next';

export default function ResumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}