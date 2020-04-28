import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { getAllUsers, IUser } from '../stores/UserStore'

import './index.scss'

interface IProps {
}

export default class Home extends React.Component<IProps> {
  static async getInitialProps({ req }) {
    const users: IUser = await getAllUsers()

    return {users}
  }

  render() {
    return (
      <div>
        <Head>
          <title>CRUD Usuários</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Nav />
      </div>
    )
  }
}

