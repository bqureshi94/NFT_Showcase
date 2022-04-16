import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <div >
      <>
      <SectionWrapper
        title="Your own store of Nifty NFTs.
        Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. 
        Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience the flawless UI of ProNef NFT 
        Marketplace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively 
        on all user devices. You can easily get your app into peoples hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase your store"
        description="The app contains two screens. The first screen lists all NFTs 
        while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>	&copy; 2022 Created by {" "}
        <span className="font-bold">Bilal Qureshi</span>
         </p>
      </div>

      </>
    </div>
  );
}

export default App;
