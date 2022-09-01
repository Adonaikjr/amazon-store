import { Container, Article, DiscountDay, JustifyContent, Main} from './styled'
import {Sale} from '../../components/Sales'
import { Header } from '../../components/Header';

function App() {
  return (
    <Container>
      <Header/>
      <DiscountDay>
        <Main>
        <h1>Eletrodomésticos em destaque</h1>
          <Article>
            <JustifyContent>
              <Sale rank='1 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07CHRZX7X&asins=B07CHRZX7X&linkId=76fb32a9565236fa2bce76a26a2c2dc7&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='2 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07CV24ZF8&asins=B07CV24ZF8&linkId=5872598c51db7f505abedb7754a8b92c&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='3 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0778WPMKB&asins=B0778WPMKB&linkId=0768aef0b8dbbfc938e3bd73971c6b92&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='4 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0778VDCW1&asins=B0778VDCW1&linkId=ca58fad1799d98e9ec8fae1386958805&show_border=true&link_opens_in_new_window=true"></iframe>} />
            </JustifyContent>
          </Article>
          <h1>Livros em destaque</h1>
          <Article>
            <JustifyContent>
              <Sale rank='1' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=6555653582&asins=6555653582&linkId=3ffeae1dafa814b69521fb157f1ee552&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
          </Article>
        </Main>
      </DiscountDay>
    </Container>
  )
}

export default App
