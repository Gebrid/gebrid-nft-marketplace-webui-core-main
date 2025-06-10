import Web3 from 'web3';

export async function login(
  setToken: Function,
  setEthAddress: Function,
  setLoggedIn: Function
) {
  // @ts-ignore
  const web3 = new Web3(window.ethereum);
  try {
    // @ts-ignore
    const accounts = await window.ethereum.send('eth_requestAccounts');
    const Web3Token = require('web3-token');
    const address = accounts.result[0];
    const signed_msg = await Web3Token.sign(
      (msg: string) => web3.eth.personal.sign(msg, address, 'qwe'),
      '1h'
    );
    const response = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify({
        eth_address: address,
        signed_msg: signed_msg,
      }),
    });

    if (response.status !== 200) {
      return;
    }

    const { token_type, access_token, refresh_token, eth_address } =
      await response.json();
    setToken(token_type, access_token, refresh_token);
    setEthAddress(eth_address);
    setLoggedIn();
  } catch (error) {
    alert('Please Install Metamask Wallet');
    return;
  }
}

export function logout(
  clearToken: Function,
  setLoggedOut: Function,
  clearEthAddress: Function
) {
  clearToken();
  setLoggedOut();
  clearEthAddress();
}
