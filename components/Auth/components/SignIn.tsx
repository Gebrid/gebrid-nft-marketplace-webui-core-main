import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSwitchNetwork,
} from 'wagmi';
import styles from '../styles/SignIn.module.scss';

function SignIn() {
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();
  const { chains } = useNetwork();
  const { switchNetworkAsync } = useSwitchNetwork();

  const handleAuth = async () => {
    try {
      if (isConnected) {
        await disconnectAsync();
      }

      const { account, chain } = await connectAsync({
        connector: connectors[0],
      });

      if (chain?.unsupported) {
        await switchNetworkAsync?.(chains[0]?.id);
      }

      //@ts-ignore
      const { message } = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });

      const signature = await signMessageAsync({ message });

      // redirect user after success authentication to '/user' page
      //@ts-ignore
      const { url } = await signIn('moralis-auth', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/profile',
      });

      /**
       * instead of using signIn(..., redirect: "/user")
       * we get the url from callback and push it to the router to avoid page refreshing
       */
      push(url);
      console.log('user is signed');
    } catch (error) {
      console.error(`sign in: ${error}`);
    }
  };

  return (
    <>
      <Head>
        <title>Sign in | Gebrid NFT</title>
      </Head>

      <div className={styles.connectWalletWrapper}>
        <div className={styles.connectWalletBg + ' hide-xs-md'}></div>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className={styles.connectWalletTitle}>
                Connect{' '}
                <span className={styles.connectWalletTitleBlue}>Wallet</span>
              </h2>
              <p className={styles.connectWalletDescription}>
                Choose one of available wallet providers or create a new wallet
              </p>

              <div className="connect-table-layout">
                <button
                  className={styles.connectWalletButton}
                  onClick={handleAuth}
                >
                  <Image
                    className={styles.connectWalletButtonIcon}
                    src="/images/connect-wallet/icon-metamask.svg"
                    width={26}
                    height={24}
                    alt="Metamask"
                  />
                  <div className={styles.connectWalletButtonName}>
                    Connect with Metamask
                  </div>
                </button>

                <button disabled className={styles.connectWalletButtonSoon}>
                  <Image
                    className={styles.connectWalletButtonSoonIcon}
                    src="/images/connect-wallet/icon-trust.svg"
                    width={24}
                    height={24}
                    alt="Trust"
                  />
                  <div className={styles.connectWalletButtonSoonLabelHolder}>
                    <span className={styles.connectWalletButtonSoonLabel}>
                      Soon
                    </span>
                  </div>
                  <div className={styles.connectWalletButtonSoonName}>
                    Connect with Trust
                  </div>
                </button>

                <button disabled className={styles.connectWalletButtonSoon}>
                  <Image
                    className={styles.connectWalletButtonSoonIcon}
                    src="/images/connect-wallet/icon-tezos.svg"
                    width={24}
                    height={24}
                    alt="Tezos"
                  />
                  <div className={styles.connectWalletButtonSoonLabelHolder}>
                    <span className={styles.connectWalletButtonSoonLabel}>
                      Soon
                    </span>
                  </div>
                  <div className={styles.connectWalletButtonSoonName}>
                    Connect with Tezos
                  </div>
                </button>

                <button disabled className={styles.connectWalletButtonSoon}>
                  <Image
                    className={styles.connectWalletButtonSoonIcon}
                    src="/images/connect-wallet/icon-fantom.png"
                    width={24}
                    height={24}
                    alt="Fantom"
                  />
                  <div className={styles.connectWalletButtonSoonLabelHolder}>
                    <span className={styles.connectWalletButtonSoonLabel}>
                      Soon
                    </span>
                  </div>
                  <div className={styles.connectWalletButtonSoonName}>
                    Connect with Fantom
                  </div>
                </button>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignIn;
