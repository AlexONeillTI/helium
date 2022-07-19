import React, { SyntheticEvent, useMemo } from 'react';
import Layout from '../../components/Layout';
import { usePageContext } from '../../renderer/usePageContext';
import { Catalog, CatalogProvider, CatalogResultItem } from '@thoughtindustries/catalog';
import { useAddResourceToQueueMutation } from '@thoughtindustries/content';
import { Appearance, CurrentUser } from '../../types';
import NavBar from '../../components/Navigation/HomepageNavBar';
import LearningCat from '../../components/CatalogComp/LearningCat';
import HomepageNavBar from '../../components/Navigation/HomepageNavBar';
import CatalogNavBar from '../../components/Navigation/CatalogNavBar';
import Footer from '../../components/Footer/Footer';
import FilterAndCatalog from '../../components/CatalogSearch/FilterAndCatalog';
import Banner from '../../components/CatalogComp/Banner';




export { Page };
export { documentProps };

const documentProps = {
  title: 'Catalog Page',
  description: 'The catalog page'
};

function Page() {
  return (
    <>
      <CatalogNavBar/>
      <Banner heading="Full Learning Catalog" subtext="Browse the full list of courses and learning paths."/>
      <FilterAndCatalog/>
      <Footer/>
    </>
  );
}

