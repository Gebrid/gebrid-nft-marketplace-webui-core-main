import { configureStore } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout/components/Layout';
import { getSession, SessionProvider } from 'next-auth/react';
import App, { AppContext } from 'next/app';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Thunk from 'redux-thunk';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import 'styles/globals.scss';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';
import ErrorFallback from '../components/Error/ErrorFallback';
import '../components/middlewares';
import '../components/reducers';
import {
  MiddlewareRegistry,
  PersistenceRegistry,
  ReducerRegistry,
  StateListenerRegistry,
} from '../state';
import { appLocalStorage } from '../state/local-storage';

const { provider, webSocketProvider, chains } = configureChains(
  [sepolia, mainnet],
  [publicProvider({ priority: 1 })]
);

const mm = new MetaMaskConnector({ chains });

const client = createClient({
  provider,
  connectors: [mm],
  webSocketProvider,
  autoConnect: true,
});

type State = {
  route: object;
  store: Store | undefined;
  queryClient: QueryClient;
};

class MyApp extends App<any, any, State> {
  _init: Promise<any> | undefined;

  constructor(props: any) {
    super(props);

    this.state = {
      route: {},
      store: undefined,
      queryClient: new QueryClient(),
    };
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    const session = await getSession(ctx);

    return { session, ...pageProps };
  }

  _initStorage(): Promise<any> {
    const _initializing = appLocalStorage.getItem('_initializing');

    return _initializing || Promise.resolve();
  }

  _createStore() {
    const reducer = ReducerRegistry.combineReducers();

    const middleware = MiddlewareRegistry.applyMiddleware(Thunk);

    const store = configureStore({
      reducer: reducer,
      devTools: process.env.NODE_ENV !== 'production',
      preloadedState: PersistenceRegistry.getPersistedState(),
      middleware: middleware,
    });

    StateListenerRegistry.subscribe(store);

    return store;
  }

  componentDidMount() {
    /**
     * Make the mobile {@code BaseApp} wait until the {@code AsyncStorage}
     * implementation of {@code Storage} initializes fully.
     *
     * @private
     * @see {@link #_initStorage}
     * @type {Promise}
     */
    this._init = this._initStorage()
      .catch((err) => {
        console.error(err);
      })
      .then(
        () =>
          new Promise((resolve) => {
            this.setState(
              {
                store: this._createStore(),
              },
              // @ts-ignore
              resolve
            );
          })
      );
  }

  componentDidCatch(error: Error, info: Object) {
    console.error(error, info);
  }

  // @ts-ignore
  render() {
    const { Component, pageProps, session } = this.props;

    const { store, queryClient } = this.state;

    if (store) {
      return (
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={client}>
            <Provider store={store}>
              <SessionProvider refetchInterval={0} session={session}>
                <Layout>
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Component {...pageProps} />
                  </ErrorBoundary>
                </Layout>
              </SessionProvider>
            </Provider>
          </WagmiConfig>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </QueryClientProvider>
      );
    }

    return null;
  }
}

export default MyApp;
