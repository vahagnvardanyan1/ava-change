import Box from "@mui/material/Box";

import { CryptoTicker } from "@/components/CryptoTicker";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const HomePage = () => (
  <Box component="main">
    <Hero />
    <CryptoTicker />
    <WhyChooseUs />
    <Faq />
    <Footer />
  </Box>
);

export default HomePage;
