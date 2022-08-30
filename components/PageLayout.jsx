import React from 'react'
import MainNav from './MainNav';

function PageLayout({Component, pageProps}) {
  return (
		<>  
            <MainNav/>
			<Component pageProps={pageProps} />
		</>
  );
}

export default PageLayout