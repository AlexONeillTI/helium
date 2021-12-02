import React from 'react';
import {
  FeaturedContent,
  SidebarRss,
  SidebarDefault,
  SidebarPosition,
  ContentTileStandardLayout,
  ContentTileDescriptiveLayout,
  ContentMultiCarousel,
  FeaturedContentContentItem
} from '../src';
import { RSS_ITEMS_QUERY } from '../src/variants/sidebar/rss';

export default {
  title: 'Example/FeaturedContent'
};

const headerOptions = {
  title: 'Feature Content Header'
};

const mockItems = {
  manual: {
    title: 'Manual item',
    description: 'description',
    shortDescription: 'short description',
    linkUrl: '/',
    canAddToQueue: false
  },
  dynamic: {
    title: 'Dynamic item',
    courseStartDate: new Date(2020, 0, 1),
    contentTypeLabel: 'Course',
    source: 'Test source',
    authors: 'Test Author',
    description: 'description',
    shortDescription: 'short description',
    linkUrl: '/',
    isCompleted: true,
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
    canAddToQueue: true,
    isActive: true,
    callToAction: 'View Details',
    ribbon: {
      bgColor: '#39ad39',
      contrastColor: '#fff',
      darkerColor: '#2c872c',
      label: 'Test ribbon',
      slug: 'test-ribbon'
    },
    rating: 36,
    hasAvailability: false,
    priceInCents: 6500,
    suggestedRetailPriceInCents: 8000
  }
};

const mockFeedUrl = 'https://foo/bar';
const mockApolloResults = {
  sidebarRss: {
    request: {
      query: RSS_ITEMS_QUERY,
      variables: {
        feedUrl: mockFeedUrl
      }
    },
    result: {
      data: {
        RssItems: [
          { title: 'Link 1', link: '/rss-link1' },
          { title: 'Link 2', link: '/rss-link2' },
          { title: 'Link 3', link: '/rss-link3' }
        ]
      }
    }
  }
};

const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> => {
  return Promise.resolve();
};

export const TileStandardLayout = () => (
  <FeaturedContent>
    <ContentTileStandardLayout
      headerOptions={headerOptions}
      desktopColumnCount={2}
      onAddedToQueue={handleAddedToQueue}
    >
      <ContentTileStandardLayout.Item {...mockItems.dynamic} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
    </ContentTileStandardLayout>
  </FeaturedContent>
);

export const TileDescriptiveLayout = () => (
  <FeaturedContent>
    <ContentTileDescriptiveLayout
      headerOptions={headerOptions}
      desktopColumnCount={2}
      onAddedToQueue={handleAddedToQueue}
    >
      <ContentTileDescriptiveLayout.Item {...mockItems.dynamic} />
      <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
      <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
      <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
    </ContentTileDescriptiveLayout>
  </FeaturedContent>
);

export const MultiCarousel = () => (
  <FeaturedContent>
    <ContentMultiCarousel
      headerOptions={headerOptions}
      desktopColumnCount={2}
      onAddedToQueue={handleAddedToQueue}
    >
      <ContentMultiCarousel.Item {...mockItems.dynamic} />
      <ContentMultiCarousel.Item {...mockItems.manual} />
      <ContentMultiCarousel.Item {...mockItems.manual} />
      <ContentMultiCarousel.Item {...mockItems.manual} />
    </ContentMultiCarousel>
  </FeaturedContent>
);

export const withLeftSidebar = () => (
  <FeaturedContent
    sidebar={<SidebarRss title="RSS" feedUrl={mockFeedUrl} />}
    sidebarPosition={SidebarPosition.Left}
  >
    <ContentTileStandardLayout
      headerOptions={headerOptions}
      desktopColumnCount={2}
      onAddedToQueue={handleAddedToQueue}
    >
      <ContentTileStandardLayout.Item {...mockItems.manual} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
    </ContentTileStandardLayout>
  </FeaturedContent>
);
withLeftSidebar.parameters = {
  apolloClient: {
    mocks: [mockApolloResults.sidebarRss]
  }
};

export const withRightSidebar = () => (
  <FeaturedContent
    sidebar={<SidebarDefault title="Default">Static sidebar content</SidebarDefault>}
    sidebarPosition={SidebarPosition.Right}
  >
    <ContentTileStandardLayout
      headerOptions={headerOptions}
      desktopColumnCount={2}
      onAddedToQueue={handleAddedToQueue}
    >
      <ContentTileStandardLayout.Item {...mockItems.manual} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
      <ContentTileStandardLayout.Item {...mockItems.manual} />
    </ContentTileStandardLayout>
  </FeaturedContent>
);
