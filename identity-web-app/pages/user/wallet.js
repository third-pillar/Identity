import Head from 'next/head'
import Row from 'react-bootstrap/Row'

import DefaultLayout from '../../layout/DefaultLayout'
import WalletCard from '../../components/WalletCard'
import WalletContainer from '../../components/WalletContainer'

export default function Wallet() {
  const isUserSession = true
  return (
    <DefaultLayout isUserSession={isUserSession}>
      <Head>
        <title>Identity - Wallet</title>
      </Head>
      <Row className="mt-4">
        <WalletCard />
        <WalletContainer />
      </Row>
    </DefaultLayout>
  )
}
