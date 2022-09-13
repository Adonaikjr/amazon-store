import { Container, Article, DiscountDay, JustifyContent, Main} from './styled'
import {Sale} from '../../components/Sales'
import { Header } from '../../components/Header';
import { BannerContent } from '../../components/Header/styled'
function App() {
  return (
    <Container>
      <Header/>
      <DiscountDay>
        <Main>
        <h1>Capsulas de café</h1>
          <Article>
            <JustifyContent>
              <Sale product={
                <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B076PSNRWR&asins=B076PSNRWR&linkId=ba1cd462efff25ee88d9d5509128a40a&show_border=false&link_opens_in_new_window=true"></iframe>
              }
              />
            </JustifyContent>

            <JustifyContent>
              <Sale product={
                <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B016YNGVZE&asins=B016YNGVZE&linkId=8cf9100007277d070b84165e927756aa&show_border=false&link_opens_in_new_window=true"></iframe>
              }
              />
            </JustifyContent>

            <JustifyContent>
              <Sale product={
               <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09RB7JDHP&asins=B09RB7JDHP&linkId=148da8674423affaf14427b172b066a5&show_border=false&link_opens_in_new_window=true"></iframe>
              }
              />
            </JustifyContent>

            <JustifyContent>
              <Sale product={
                <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09G54TR7C&asins=B09G54TR7C&linkId=f5914c416eff89e6ca47a4bfb3558720&show_border=false&link_opens_in_new_window=true"></iframe>
              }
              />
            </JustifyContent>
          </Article>
        <h1>Eletrodomésticos em destaque</h1>
          <Article>
            <JustifyContent>
              <Sale rank='1 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07CHRZX7X&asins=B07CHRZX7X&linkId=76fb32a9565236fa2bce76a26a2c2dc7&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='2 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07CV24ZF8&asins=B07CV24ZF8&linkId=5872598c51db7f505abedb7754a8b92c&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='3 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0778WPMKB&asins=B0778WPMKB&linkId=0768aef0b8dbbfc938e3bd73971c6b92&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='4 Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0778VDCW1&asins=B0778VDCW1&linkId=ca58fad1799d98e9ec8fae1386958805&show_border=true&link_opens_in_new_window=true"></iframe>} />
            </JustifyContent>
          </Article>
          <a href='https://amzn.to/3Q5fmQN' target='_blank'>
                    <BannerContent/>
                </a>
          <h1>Livros em destaque</h1>
          <Article>
            <JustifyContent>
              <Sale rank='1º Mais vendidos' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=6555653582&asins=6555653582&linkId=3ffeae1dafa814b69521fb157f1ee552&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='2º Mais vendidos' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=6559571866&asins=6559571866&linkId=9633f89644d3a1efaec1ce7ac119e9ef&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
              <Sale rank='3º Mais vendidos' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=6555358297&asins=6555358297&linkId=db0e534a1284b7d1d7ac0c50cc482f56&show_border=true&link_opens_in_new_window=true"></iframe>} />
            </JustifyContent>
            <JustifyContent>
            <Sale rank='4º Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=6553620075&asins=6553620075&linkId=76cf98edc776332e866ad03ef3a82459&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            <JustifyContent>
            <Sale rank='4º Mais vendido' product={<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=adonaikjr-20&language=pt_BR&marketplace=amazon&region=BR&placement=6553620075&asins=6553620075&linkId=76cf98edc776332e866ad03ef3a82459&show_border=true&link_opens_in_new_window=true"></iframe>}/>
            </JustifyContent>
            
          </Article>
        </Main>
      </DiscountDay>
    </Container>
  )
}

export default App
