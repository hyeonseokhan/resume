# next.config.js
Next.js 프로젝트의 설정 파일로, 프로젝트의 동작을 커스터마이징하는 데 사용됩니다.
```javascript
{
  /* eslint-disable */
  const withImages = require('next-images');
  const { homepage } = require('./package.json');

  const { NODE_ENV } = process.env;

  module.exports = withImages({
    assetPrefix: (() => {
      if (NODE_ENV === 'production' && homepage) {
        try {
          console.log('> Detected homepage url in package.json');
          const { pathname } = new URL(homepage);
          if (pathname !== '/') {
            console.log(`> Apply \'${pathname}\' to assetPrefix(subPath)`);
            return pathname;
          }
          return '';
        } catch {
          console.log('> Can not parse homepage URL not apply assetPrefix(subPath)');
          return '';
        }
      }
      return '';
    })(),
  });
}
```