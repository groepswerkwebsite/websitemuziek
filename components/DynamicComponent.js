import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import Page from './Page'
import BlogPost from './BlogPost'
import Text from './Text'
import Studio from './Studio'
import Genre from './Genre'
import Country from './Country'
import NewsItem from './NewsItem'
import FrontpageSlideshow from './FrontpageSlideshow'
import Intro from './Intro'
import NewsItemList from './NewsItemList'
import ProductList from './ProductList'
import Product from './Product'
import EmailOptin from './EmailOptin'
import TwoCol from './TwoCol'
import Title from './Title'
import TopMovies from './TopMovies'
import Concert from './Concert'
import Concertlist from './Concertlist'
import Artist from './Artist'
import Artistlist from './ArtistList'
import Song from './Song'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'page': Page,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'studio': Studio,
  'genre' : Genre,
  'country' : Country,
  'newsitem': NewsItem,
  'frontpageslideshow':FrontpageSlideshow,
  'intro':Intro,
  'newsitemlist':NewsItemList,
  'productlist':ProductList,
  'productcategory':Placeholder,
  'product':Product,
  'emailoptin':EmailOptin,
  'twocol':TwoCol,
  'title':Title,
  'topmovies':TopMovies,
  'concert':Concert,
  'concertlist':Concertlist,
  'artist':Artist,
  'artistlist':Artistlist,
  'song':Song
}


const DynamicComponent = ({ data, locale }) => {
  let componentType='undefined';
  let level = 'undefined';
  if(data&&data.story&&data.story.content){
    componentType = data.story.content.component;
    level='data';
  } else if(data&&data.component){
    componentType = data.component;
    level='content';
  }
  if (componentType !== 'undefined') {
    const Component = Components[componentType]
    return <Component data={data} level={level} locale={locale}  />
  }
  return <Placeholder componentName={componentType}/>
}

export default DynamicComponent
