import ThemeProvider from 'components/Theme/components/ThemeProvider';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <ThemeProvider>{children}</ThemeProvider>
      <Footer />
    </>
  );
}
